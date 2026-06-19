import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  serviceRequired: z.string().min(1, "Select a service"),
  cargoType: z.string().optional(),
  cargoDescription: z.string().min(10, "Please describe the cargo"),
  origin: z.string().min(2, "Origin is required"),
  destination: z.string().min(2, "Destination is required"),
  estimatedWeight: z.string().optional(),
  estimatedVolume: z.string().optional(),
  numberOfPackages: z.string().optional(),
  preferredTransportMethod: z.string().optional(),
  expectedShippingDate: z.string().optional(),
  additionalInformation: z.string().optional(),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "Please confirm we can contact you",
    }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
