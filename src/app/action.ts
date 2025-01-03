"use server";

import mailerTemplate from "@/lib/mailer";
import {
  ContactUsFormInterface,
  SendMailAPIResponse,
} from "@/lib/typescript-types";
import { ContactUsSchema } from "@/lib/zod-schemas";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_BOT_EMAIL,
    pass: process.env.MAIL_BOT_PASSWORD,
  },
});

const sendMailPromise = (enquiryData: ContactUsFormInterface) =>
  new Promise<SendMailAPIResponse>((resolve, reject) => {
    transport.sendMail(
      {
        from: `"DM-Cockpit" <${process.env.MAIL_BOT_EMAIL}>`,
        to: "kanojiya9768@gmail.com",
        cc: "kanojiya9768@gmail.com",
        subject: `DM-Cockpit - Contact Data`,
        html: mailerTemplate(enquiryData),
      },
      (err) => {
        if (!err) {
          resolve({ status: "success", message: "Email has been sent" });
        } else {
          reject(err.message);
        }
      }
    );
  });

export async function SendMail(
  prev: SendMailAPIResponse,
  ContactUsData: ContactUsFormInterface
): Promise<SendMailAPIResponse> {
  const validateFields = ContactUsSchema.safeParse({
    FullName: ContactUsData.FullName as string,
    CountryCode: ContactUsData?.CountryCode,
    PhoneNumber: ContactUsData.PhoneNumber as string,
    Email: ContactUsData.Email as string,
    Message: ContactUsData.Message || "Not Specified",
  });

  if (!validateFields.success) {
    return {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Oops, something is wrong with your inputs",
    };
  }

  try {
    return await sendMailPromise(ContactUsData);
  } catch (err) {
    return {
      status: "error",
      errors: { backend: [err as string] },
      message: "Oops, something went wrong!",
    };
  }
}
