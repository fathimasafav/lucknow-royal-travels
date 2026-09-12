"use client";

import { Button } from "@/components/ui/Button";
import { PhoneCall } from "lucide-react";
import React, { useState } from "react";

export function ServiceInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-stone-200 text-center font-sans">
        <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
          Inquiry Received!
        </h3>
        <p className="text-xs text-stone-600 mb-6">
          Thank you for submitting your request. Our senior visa consultant will contact you within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="primary"
          className="w-full bg-[#0F9E5E] text-white hover:bg-[#0D8A52] font-bold py-2.5"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-stone-200 font-sans">
      <h3 className="font-serif text-2xl font-semibold text-[#1C1C1C] mb-2">
        Inquire About Service
      </h3>
      <p className="text-xs text-[#6B7280] mb-6">
        Send your details and our senior travel consultant will reach out to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-medium text-stone-700 mb-1">Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#23446F]"
          />
        </div>

        <div>
          <label className="block font-medium text-stone-700 mb-1">Phone / WhatsApp Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#23446F]"
          />
        </div>

        <div>
          <label className="block font-medium text-stone-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#23446F]"
          />
        </div>

        <div>
          <label className="block font-medium text-stone-700 mb-1">Nearest Royal Travels Branch</label>
          <select className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#23446F] bg-white">
            <option>Mumbai HQ (Fort / Dongri)</option>
            <option>Delhi Branch</option>
            <option>Kottakkal / Kerala Branch</option>
            <option>Other GCC / Regional Branch</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-stone-700 mb-1">Specific Requirements / Message</label>
          <textarea
            rows={3}
            placeholder="Mention your passport type, visa category, or urgency..."
            className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#23446F]"
          />
        </div>

        <Button type="submit" variant="primary" className="w-full bg-[#0F9E5E] text-white hover:bg-[#0D8A52] font-bold py-3 mt-2">
          Submit Service Inquiry
        </Button>
      </form>

      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3 text-xs text-[#6B7280]">
        <PhoneCall className="h-4 w-4 text-[#23446F] shrink-0" />
        <span>Direct Helpline: <strong>+91 22 2371 5000</strong></span>
      </div>
    </div>
  );
}
