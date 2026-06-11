"use client";

import { useActionState } from "react";
import { useCallback, useState } from "react";
import { sanitizeInput, isValidEmail, isRateLimited, setRateLimit } from "@/lib/utils";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (prevState: unknown, formData: FormData) => {
      const name = formData.get("name");
      const country = formData.get("country");
      const email = formData.get("email");
      const website = formData.get("website");

      // 1. Honeypot check (spam bots)
      if (website && typeof website === "string" && website.trim() !== "") {
        // Mock a success message to fool the bot
        setMessage("✅ You have successfully registered for the KSV Engineering seminar!");
        return;
      }

      // 2. Client-side rate limit check
      if (isRateLimited("seminar_register", 30000)) {
        setMessage("⚠️ Please wait. You have submitted recently. Try again in 30 seconds.");
        return;
      }

      if (
        !name ||
        typeof name !== "string" ||
        !country ||
        typeof country !== "string" ||
        !email ||
        typeof email !== "string"
      ) {
        setMessage("⚠️ All fields are required.");
        return;
      }

      // 3. Email Format Validation
      const trimmedEmail = email.trim();
      if (!isValidEmail(trimmedEmail)) {
        setMessage("⚠️ Please enter a valid email address.");
        return;
      }

      // 4. Input Sanitization (strip HTML tags) & Length enforcement
      const sanitizedName = sanitizeInput(name).substring(0, 100);
      const sanitizedCountry = sanitizeInput(country).substring(0, 100);

      if (!sanitizedName || !sanitizedCountry) {
        setMessage("⚠️ Name and country fields cannot contain only HTML tags or whitespace.");
        return;
      }

      try {
        const res = await fetch(`/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: sanitizedName, country: sanitizedCountry, email: trimmedEmail }),
        });

        const data = await res.json();

        if (!res.ok) {
          setMessage(data.message || "Something went wrong.");
        } else {
          // Set rate limit cooldown timestamp
          setRateLimit("seminar_register");
          setMessage(
            `✅ ${sanitizedName}, you have successfully registered for the KSV Engineering seminar!`,
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setMessage(`⚠️ Network error: ${err.message}`);
        } else {
          setMessage("⚠️ Network error. Please try again.");
        }
      }
    },
    [],
  );

  const [, formAction, isPending] = useActionState(handleSubmit, null);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <main className="w-full max-w-xl p-6 text-center flex flex-col gap-6">
        <p
          className="font-bold text-xl fade-up"
          style={{ animationDelay: "120ms" }}
        >
          KSV ENGINEERING
        </p>
        <h1
          className="text-3xl font-semibold fade-up"
          style={{ animationDelay: "240ms" }}
        >
          REGISTER FOR OUR UPCOMING SEMINAR!
        </h1>
        <p
          className="text-lg text-gray-600 fade-up"
          style={{ animationDelay: "360ms" }}
        >
          Join our seminar to learn about the latest trends in engineering,
          technology innovations, and practical workshops led by industry
          experts.
        </p>

        <form
          action={formAction}
          className="w-full max-w-md mx-auto flex flex-col gap-4 fade-up"
          style={{ animationDelay: "520ms" }}
        >
          {/* Honeypot field hidden from screen readers and visual users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Leave this field blank</label>
            <input
              id="website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            maxLength={100}
            required
            disabled={isPending}
            className="w-full p-3 rounded-md bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            maxLength={100}
            required
            disabled={isPending}
            className="w-full p-3 rounded-md bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            maxLength={254}
            required
            disabled={isPending}
            className="w-full p-3 rounded-md bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-md text-white bg-blue-600 hover:brightness-95 disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>

        {message && (
          <p className="text-sm mt-2 text-gray-700" aria-live="polite">
            {message}
          </p>
        )}
      </main>
    </div>
  );
}

