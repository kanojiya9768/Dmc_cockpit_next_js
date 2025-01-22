import { z, ZodType } from "zod";
import {
  ContactUsFormInterface,
  ForgotPasswordFormInterface,
  LoginFormInterface,
  ShortContactUsFormInterface,
  SignUpFormInterface,
} from "./typescript-types";

export const SignUpSchema: ZodType<SignUpFormInterface> = z.object({
  FirstName: z
    .string({ message: "First Name Required" })
    .min(2, "First Name should have atleast 2 characters")
    .max(30, "First Name cannot have more than 30 characters"),
  LastName: z
    .string({ message: "Last Name Required" })
    .min(2, "Last Name should have atleast 2 characters")
    .max(30, "Last Name cannot have more than 30 characters"),
  CountryCode: z.string({ message: "Country Code Required" }),
  PhoneNumber: z
    .string()
    .min(7, "Should be atleast 8 digits")
    .max(15, "Not allowed more than 15 digits"),
  Email: z
    .string({ message: "Email Required" })
    .email({ message: "The entered value is not an valid Email" }),
  Password: z.string().min(6, "Password should be atleast 6 characters long"),
});

export const LogInSchema: ZodType<LoginFormInterface> = z.object({
  email: z
    .string({ message: "Email Required" })
    .email({ message: "The entered value is not an valid Email" }),
  password: z.string().min(6, "Password should be atleast 6 characters long"),
});

export const ForgotPasswordSchema: ZodType<ForgotPasswordFormInterface> =
  z.object({
    email: z.string().email("The entered value is not an Email"),
  });

export const ContactUsSchema: ZodType<ContactUsFormInterface> = z.object({
  FullName: z
    .string({ message: "Full Name Required" })
    .min(2, "Name should have atleast 2 characters")
    .max(30, "Name cannot have more than 30 characters"),
  CountryCode: z.string({ message: "Country Code Required" }),
  CompanyName: z
    .string({ message: "Full Name Required" })
    .min(2, "Company Name should have atleast 2 characters")
    .max(30, "Company Name cannot have more than 30 characters"),
  CompanySize: z.string({ message: "Company Size Required" }),
  JobRole: z.string({ message: "Job Role Required" }),
  Country: z.string({ message: "Country Required" }),
  PurposeOfCall: z.string({ message: "Purpose Of Call Required" }),
  PhoneNumber: z
    .string()
    .min(7, "Should be atleast 8 digits")
    .max(15, "Not allowed more than 15 digits"),
  Email: z
    .string({ message: "Email Required" })
    .email({ message: "The entered value is not an valid Email" }),
  Message: z
    .string({ message: "Message Required" })
    .min(2, "Message should have atleast 8 characters"),
});
export const ShortContactUsSchema: ZodType<ShortContactUsFormInterface> =
  z.object({
    FullName: z
      .string({ message: "Full Name Required" })
      .min(2, "Name should have atleast 2 characters")
      .max(30, "Name cannot have more than 30 characters"),
    PhoneNumber: z
      .string()
      .min(7, "Should be atleast 8 digits")
      .max(15, "Not allowed more than 15 digits"),
    CompanySize: z.string({ message: "Company Size Required" }),
    CompanyName: z
      .string({ message: "Full Name Required" })
      .min(2, "Company Name should have atleast 2 characters")
      .max(30, "Company Name cannot have more than 30 characters"),
    Email: z
      .string({ message: "Email Required" })
      .email({ message: "The entered value is not an valid Email" }),
  });
