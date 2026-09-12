"use client";

import { Button } from "@/components/ui/Button";
import React, { useState } from "react";

interface BookingFormProps {
  price?: string;
  duration?: string;
}

export function BookingForm({ price = "$25", duration = "3 Days" }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-900    text-white    rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
      <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans block">
            Start From
          </span>
          <span className="font-serif text-3xl font-bold text-white">
            {price}
          </span>
          <span className="text-xs text-stone-400 font-sans"> / person</span>
        </div>
        <span className="glass-pill text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-stone-200">
          {duration}
        </span>
      </div>

      {submitted ? (
        <div className="text-center py-4">
          <h4 className="font-serif text-xl font-semibold text-white">
            Inquiry Received!
          </h4>
          <p className="mt-2 text-xs text-stone-300 font-sans">
            Our luxury travel advisor will contact you within 24 hours.
          </p>
          <Button
            variant="primary"
            size="sm"
            className="mt-4"
            onClick={() => setSubmitted(false)}
          >
            Modify Request
          </Button>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-sans mb-1.5">
              Travel Date
            </label>
            <input
              type="date"
              required
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40 font-sans"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-sans mb-1.5">
              Number of Guests
            </label>
            <select className="w-full bg-stone-800 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40 font-sans">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="4">4 Guests</option>
              <option value="6">6+ Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-sans mb-1.5">
              Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Your travel preferences..."
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-white/40 font-sans"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
            Book This Destination
          </Button>
        </form>
      )}
    </div>
  );
}
