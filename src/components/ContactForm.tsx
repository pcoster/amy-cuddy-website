"use client";

import { useState } from "react";

const eventTypes = [
  "Corporate Keynote",
  "Leadership Conference",
  "University / Academic",
  "Women's Leadership",
  "Workshop (Half-Day or Full-Day)",
  "Webinar / Virtual Event",
  "Nonprofit / Government",
  "Panel Discussion",
  "Media / Press Interview",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  organization: string;
  eventDate: string;
  eventType: string;
  audienceSize: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  organization: "",
  eventDate: "",
  eventType: "",
  audienceSize: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Wire to Formspree: action="https://formspree.io/f/YOUR_FORM_ID"
    // Or any other form backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-3">
          Thank you for your inquiry
        </h3>
        <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
          We&apos;ve received your message and will be in touch within 2–3 business days.
          We look forward to learning more about your event.
        </p>
        <button
          onClick={() => {
            setFormData(initialFormData);
            setStatus("idle");
          }}
          className="mt-8 px-6 py-3 border border-gray-200 text-text-secondary font-medium text-sm rounded-md hover:border-gray-300 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-gray-200 text-text-primary placeholder-text-secondary/60 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40 transition-colors bg-white";
  const labelClass = "block text-sm font-medium text-text-primary mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization / Company <span className="text-red-400">*</span>
        </label>
        <input
          id="organization"
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
          placeholder="Acme Corporation"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event Date (approximate)
          </label>
          <input
            id="eventDate"
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event Type <span className="text-red-400">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select event type...
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Audience size */}
      <div>
        <label htmlFor="audienceSize" className={labelClass}>
          Expected Audience Size
        </label>
        <select
          id="audienceSize"
          name="audienceSize"
          value={formData.audienceSize}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select audience size...</option>
          <option value="Under 50">Under 50</option>
          <option value="50–150">50–150</option>
          <option value="150–500">150–500</option>
          <option value="500–1,000">500–1,000</option>
          <option value="1,000–5,000">1,000–5,000</option>
          <option value="5,000+">5,000+</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell Us About Your Event <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Please share details about your event — goals, audience, theme, any specific topics you'd like Amy to address, and any other relevant information."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-dark transition-colors disabled:opacity-70 shadow-sm"
        >
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </button>
        <p className="text-xs text-text-secondary">
          We respond to all inquiries within 2–3 business days.
        </p>
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:booking@amycuddy.com" className="underline">
            booking@amycuddy.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
