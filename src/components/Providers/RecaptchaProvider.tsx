"use client";
import { PropsWithChildren } from "react";
import { GoogleReCaptchaProvider } from "react19-google-recaptcha-v3";

export default function GoogleReCaptchaComponent({
  children,
}: PropsWithChildren) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      container={{
        element: "recaptcha-badge",
        parameters: { badge: "bottomright" },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
