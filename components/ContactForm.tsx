'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="card text-center py-12 animate-scale-in" id="form-success">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" id="contact-form">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`w-full px-5 py-4 rounded-lg bg-bg-primary border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-lime/50 transition-all
            ${errors.name ? 'border-red-400' : 'border-border-default focus:border-accent-lime'}`}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`w-full px-5 py-4 rounded-lg bg-bg-primary border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-lime/50 transition-all
            ${errors.email ? 'border-red-400' : 'border-border-default focus:border-accent-lime'}`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
          className="w-full px-5 py-4 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-lime/50 focus:border-accent-lime transition-all"
        />
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-lg bg-bg-primary border border-border-default text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-lime/50 focus:border-accent-lime transition-all"
        >
          <option value="">Select a service...</option>
          <option value="ecommerce">Ecommerce Platforms</option>
          <option value="product-engineering">Product Engineering</option>
          <option value="ai-driven">AI-Driven Solutions</option>
          <option value="ai-automation">AI Automation</option>
          <option value="consulting">Technical Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`w-full px-5 py-4 rounded-lg bg-bg-primary border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent-lime/50 resize-none transition-all
            ${errors.message ? 'border-red-400' : 'border-border-default focus:border-accent-lime'}`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button type="submit" className="btn-accent w-full justify-center">
        Send Message
      </button>
    </form>
  );
}
