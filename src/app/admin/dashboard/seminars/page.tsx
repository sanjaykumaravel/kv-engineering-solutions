"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface SeminarRegistrationItem {
  id: number;
  name: string;
  email: string;
  country: string;
}

export default function SeminarsPage() {
  const [registrations, setRegistrations] = useState<SeminarRegistrationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  async function loadData() {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) throw new Error("Unauthorized");

      const res = await fetch("/api/admin/seminars", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch registrations");
      const data = await res.json();
      setRegistrations(data || []);
    } catch (err: any) {
      toast.error("Failed to load records: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        loadData();
      }
    }
    init();
  }, []);

  const handleDeleteRegistration = async (item: SeminarRegistrationItem) => {
    if (!confirm(`Are you sure you want to delete registration for "${item.name}"?`)) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) throw new Error("Unauthorized");

      const res = await fetch(`/api/admin/seminars?id=${item.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Deletion failed");

      toast.success(`Deleted registration for "${item.name}".`);
      setRegistrations((prev) => prev.filter((r) => r.id !== item.id));

      // Dispatch event to refresh counts in sidebar layout
      window.dispatchEvent(new Event("admin-data-changed"));
    } catch (err: any) {
      toast.error("Deletion failed: " + err.message);
    }
  };

  const filteredRegistrations = registrations.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Seminar Registrations
        </h1>
        <p className="text-sm text-slate-500 font-light mt-1">
          View and manage registrations for upcoming engineering seminars.
        </p>
      </div>

      <div className="space-y-4">
        {/* Search & Stats */}
        <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name, email, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border-slate-200 text-slate-900 pl-9 h-9 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
            />
          </div>
          <span className="text-xs text-slate-555 font-semibold">
            Showing {filteredRegistrations.length} of {registrations.length}
          </span>
        </div>

        {/* List Table */}
        <Card className="bg-white border-slate-200 rounded-2xl overflow-hidden border shadow-sm">
          <div className="overflow-x-auto max-h-[600px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500 w-16">
                    ID
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Full Name
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Email Address
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Country
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500 text-right w-24">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500 text-sm">
                      <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                      Loading registrations...
                    </td>
                  </tr>
                ) : filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500 text-sm">
                      No registrations found.
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-slate-200 hover:bg-slate-50/40 transition-colors"
                    >
                      <td className="p-4 text-sm font-semibold text-slate-500">
                        #{item.id}
                      </td>
                      <td className="p-4 text-sm font-medium text-slate-800">
                        {item.name}
                      </td>
                      <td className="p-4 text-sm text-slate-650">
                        <a
                          href={`mailto:${item.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {item.email}
                        </a>
                      </td>
                      <td className="p-4 text-sm text-slate-650">
                        {item.country}
                      </td>
                      <td className="p-4 text-right">
                        <Button
                          onClick={() => handleDeleteRegistration(item)}
                          variant="ghost"
                          size="icon"
                          className="text-red-650 hover:text-red-700 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
