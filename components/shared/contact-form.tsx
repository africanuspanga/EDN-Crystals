"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function InputField({ label, error, className, ...props }: InputProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="text-sm font-medium text-[#1b294c]">
        {label}
        {props.required && <span className="ml-1 text-[#d2a456]">*</span>}
      </label>
      <input
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#667085]/60 focus:border-[#d2a456] focus:outline-none focus:ring-1 focus:ring-[#d2a456]",
          error ? "border-red-400" : "border-[#e5e7eb]"
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function TextAreaField({ label, error, className, ...props }: TextAreaProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="text-sm font-medium text-[#1b294c]">
        {label}
        {props.required && <span className="ml-1 text-[#d2a456]">*</span>}
      </label>
      <textarea
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#667085]/60 focus:border-[#d2a456] focus:outline-none focus:ring-1 focus:ring-[#d2a456]",
          error ? "border-red-400" : "border-[#e5e7eb]"
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");

    try {
      // TODO: Replace with real backend API integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Contact form payload", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[#e6eefd] p-8 text-center sm:p-12">
        <h3 className="text-xl font-semibold text-[#1b294c]">Message sent</h3>
        <p className="mt-3 text-[#667085]">
          Thank you for contacting us. A member of our logistics team will
          respond as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-[#1b294c] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1b294c]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Full name"
          {...register("fullName")}
          error={errors.fullName?.message}
          required
        />
        <InputField
          label="Email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Phone number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <InputField
          label="Subject"
          {...register("subject")}
          error={errors.subject?.message}
          required
        />
      </div>

      <TextAreaField
        label="Message"
        rows={5}
        {...register("message")}
        error={errors.message?.message}
        required
      />

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#d2a456] px-8 py-4 text-sm font-semibold text-[#1b294c] transition-colors hover:bg-[#c49a4a] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
