import { z, ZodType } from "zod";
import { ContactUsFormInterface } from "./typescript-types";

export const ContactUsSchema: ZodType<ContactUsFormInterface> = z.object({
  FullName: z
    .string({ message: "Full Name Required" })
    .min(2, "Name should have atleast 2 characters")
    .max(30, "Name cannot have more than 30 characters"),
  CountryCode: z.string({ message: "Country Code Required" }),
  PhoneNumber: z
    .string({ message: "Phone Number Required" })
    .regex(/^[789]\d{9}$/, "Phone number must be exactly 10 digits")
    .length(10, "Phone number must be exactly 10 digits"),
  Email: z
    .string({ message: "Email Required" })
    .email({ message: "The entered value is not an valid Email" }),
  Message: z
    .string({ message: "Message Required" })
    .min(2, "Message should have atleast 8 characters"),
});
