export type ContactUsFormInterface = {
  FullName: string;
  CountryCode: string;
  PhoneNumber: string;
  Email: string;
  Message: string;
};

export type SendMailAPIResponse = {
  status: "error" | "success" | undefined;
  errors?: { [key: string]: string[] };
  message: string;
};
