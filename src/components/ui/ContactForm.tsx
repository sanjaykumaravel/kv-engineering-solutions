"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { sanitizeInput, isValidEmail, isRateLimited, setRateLimit } from "@/lib/utils";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agreeToPrivacy: false,
    website: "", // Honeypot field (hidden from users)
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToPrivacy) {
      toast({
        title: "Privacy Policy Required",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    // 1. Client-side rate limiting check
    if (isRateLimited("contact_form", 30000)) {
      toast({
        title: "Please Wait",
        description: "You have already submitted a request recently. Please try again in 30 seconds.",
        variant: "destructive",
      });
      return;
    }

    // 2. Honeypot check (spam bots)
    if (formData.website) {
      // Silently discard submission, but show a mock success message to confuse the bot
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        agreeToPrivacy: false,
        website: "",
      });
      return;
    }

    // 3. Email Format Validation
    const trimmedEmail = formData.email.trim();
    if (!isValidEmail(trimmedEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // 4. Input Sanitization (strip HTML tags) & Length enforcement
    const sanitizedName = sanitizeInput(formData.name).substring(0, 100);
    const sanitizedCompany = sanitizeInput(formData.company).substring(0, 100);
    const sanitizedMessage = sanitizeInput(formData.message).substring(0, 5000);

    // Ensure they are not empty after sanitization
    if (!sanitizedName || !sanitizedMessage) {
      toast({
        title: "Validation Error",
        description: "Name and project details are required and cannot consist only of HTML tags or whitespace.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase.from("contact_submissions").insert([
        {
          name: sanitizedName,
          email: trimmedEmail,
          company: sanitizedCompany,
          message: sanitizedMessage,
        },
      ]);

      if (dbError) throw dbError;

      // Set rate limit cooldown timestamp
      setRateLimit("contact_form");

      toast({
        title: "Quote Request Sent!",
        description:
          "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        agreeToPrivacy: false,
        website: "",
      });
    } catch (error) {
      console.error("Error saving contact submission:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field hidden from screen readers and visual users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <Input
          id="website"
          type="text"
          value={formData.website}
          onChange={(e) => handleInputChange("website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">
            Your Name *
          </label>
          <Input
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="John Doe"
            maxLength={100}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john@company.com"
            maxLength={254}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Company Name
        </label>
        <Input
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          placeholder="Your Company"
          maxLength={100}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Project Details *
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
          rows={5}
          maxLength={5000}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacy"
          checked={formData.agreeToPrivacy}
          disabled={isSubmitting}
          onCheckedChange={(checked) =>
            handleInputChange("agreeToPrivacy", checked === true)
          }
        />
        <label
          htmlFor="privacy"
          className="text-sm text-muted-foreground leading-relaxed select-none"
        >
          Yes, I am OK to receive further communication over my details shared
          here. Refer privacy policy for more info.
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full shadow-professional" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Quote Request
          </>
        )}
      </Button>
    </form>
  );
}

