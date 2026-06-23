"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Clearing and Forwarding",
  "Customs Clearance",
  "Sea Freight",
  "Air Freight",
  "Loose Cargo or LCL",
  "Warehousing",
  "Biological Sample Movement",
  "Importer or Exporter of Record",
  "Door-to-Door Delivery",
  "Logistics Consultancy",
  "Other",
];

const transportOptions = [
  "Air Freight",
  "Sea Freight",
  "Road Freight",
  "Railway",
  "Multimodal",
  "Not sure",
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function InputField({ label, error, className, ...props }: InputProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="text-sm font-medium text-[#002a8a]">
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

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: string[];
}

function SelectField({ label, error, options, className, ...props }: SelectProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="text-sm font-medium text-[#002a8a]">
        {label}
        {props.required && <span className="ml-1 text-[#d2a456]">*</span>}
      </label>
      <select
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#111827] focus:border-[#d2a456] focus:outline-none focus:ring-1 focus:ring-[#d2a456]",
          error ? "border-red-400" : "border-[#e5e7eb]"
        )}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
      <label className="text-sm font-medium text-[#002a8a]">
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

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setStatus("loading");

    try {
      // TODO: Replace with real backend API integration
      // const response = await fetch('/api/quote', { method: 'POST', body: JSON.stringify(data) });
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Quote form payload", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[#e6eefd] p-8 text-center sm:p-12">
        <h3 className="text-xl font-semibold text-[#002a8a]">Thank you</h3>
        <p className="mt-3 text-[#667085]">
          Your quote request has been received. Our logistics team will review
          the details and contact you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-[#0038b8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0038b8]"
        >
          Submit another request
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
          label="Company name"
          {...register("companyName")}
          error={errors.companyName?.message}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          required
        />
        <InputField
          label="Phone number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          label="Service required"
          options={serviceOptions}
          {...register("serviceRequired")}
          error={errors.serviceRequired?.message}
          required
        />
        <InputField
          label="Cargo type"
          {...register("cargoType")}
          error={errors.cargoType?.message}
        />
      </div>

      <TextAreaField
        label="Cargo description"
        rows={4}
        {...register("cargoDescription")}
        error={errors.cargoDescription?.message}
        required
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Origin"
          {...register("origin")}
          error={errors.origin?.message}
          required
        />
        <InputField
          label="Destination"
          {...register("destination")}
          error={errors.destination?.message}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <InputField
          label="Estimated weight"
          placeholder="e.g. 500 kg"
          {...register("estimatedWeight")}
          error={errors.estimatedWeight?.message}
        />
        <InputField
          label="Estimated volume"
          placeholder="e.g. 2 CBM"
          {...register("estimatedVolume")}
          error={errors.estimatedVolume?.message}
        />
        <InputField
          label="Number of packages"
          type="number"
          {...register("numberOfPackages")}
          error={errors.numberOfPackages?.message}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          label="Preferred transportation method"
          options={transportOptions}
          {...register("preferredTransportMethod")}
          error={errors.preferredTransportMethod?.message}
        />
        <InputField
          label="Expected shipping date"
          type="date"
          {...register("expectedShippingDate")}
          error={errors.expectedShippingDate?.message}
        />
      </div>

      <TextAreaField
        label="Additional information"
        rows={3}
        {...register("additionalInformation")}
        error={errors.additionalInformation?.message}
      />

      <div className="rounded-lg border border-dashed border-[#e5e7eb] bg-[#f8fafc] p-4">
        <label className="text-sm font-medium text-[#002a8a]">
          Optional document upload
        </label>
        <input
          type="file"
          disabled
          className="mt-2 block w-full text-sm text-[#667085] file:mr-4 file:rounded-full file:border-0 file:bg-[#0038b8] file:px-4 file:py-2 file:text-xs file:font-medium file:text-white disabled:cursor-not-allowed disabled:opacity-50"
        />
        <p className="mt-2 text-xs text-[#667085]">
          File upload is not yet connected to a backend. Please describe your
          documents above or email them to us directly.
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 rounded border-[#e5e7eb] text-[#0038b8] focus:ring-[#d2a456]"
          />
          <span className="text-sm text-[#667085]">
            I agree that EDN Crystals Logistics Limited may contact me about my
            quote request.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-500">{errors.consent.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#d2a456] px-8 py-4 text-sm font-semibold text-[#0038b8] transition-colors hover:bg-[#c49a4a] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Request a Quote"}
      </button>
    </form>
  );
}
