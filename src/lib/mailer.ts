import {
  ContactUsFormInterface,
  ShortContactUsFormInterface,
} from "./typescript-types";

export function mailerTemplate(enquiryData: ContactUsFormInterface): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    table {
      width: 100%;
      max-width: 600px;
      margin: 30px auto;
      border-spacing: 0;
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 8px;
    }
    th {
      background-color: #007BFF;
      color: #fff;
      padding: 10px;
      text-align: left;
      font-size: 16px;
    }
    td {
      padding: 12px;
      border-top: 1px solid #ddd;
      font-size: 14px;
      color: #333;
    }
    .footer {
      background-color: #f1f1f1;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #555;
    }
    .footer a {
      color: #007BFF;
      text-decoration: none;
    }
    .key {
      font-weight: bold;
      color: #555;
    }
    .value {
      color: #333;
    }
  </style>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th colspan="2">New Enquiry Submission</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="key">Full Name:</td>
        <td class="value">${enquiryData?.FullName}</td>
      </tr>
      <tr>
        <td class="key">Phone Number:</td>
        <td class="value">${enquiryData?.CountryCode} ${enquiryData?.PhoneNumber}</td>
      </tr>
      <tr>
        <td class="key">Email:</td>
        <td class="value">${enquiryData?.Email}</td>
      </tr>
       <tr>
        <td class="key">Company Size:</td>
        <td class="value">${enquiryData?.CompanySize}</td>
      </tr> <tr>
        <td class="key">Company Name:</td>
        <td class="value">${enquiryData?.CompanyName}</td>
      </tr>
      </tr> <tr>
        <td class="key">Job Role:</td>
        <td class="value">${enquiryData?.JobRole}</td>
      </tr>
      </tr> <tr>
        <td class="key">Country:</td>
        <td class="value">${enquiryData?.Country}</td>
      </tr>
      </tr> <tr>
        <td class="key">Purpose Of Contact:</td>
        <td class="value">${enquiryData?.PurposeOfCall}</td>
      </tr>
      <tr>
        <td class="key">Message:</td>
        <td class="value">${enquiryData?.Message}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
    <p>For inquiries, visit <a href="https://www.dmcockpit.com/">our website</a>.</p>
  </div>

</body>
</html>
`;
}

export function mailerShortCOntactTemplate(
  enquiryData: ShortContactUsFormInterface
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    table {
      width: 100%;
      max-width: 600px;
      margin: 30px auto;
      border-spacing: 0;
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 8px;
    }
    th {
      background-color: #007BFF;
      color: #fff;
      padding: 10px;
      text-align: left;
      font-size: 16px;
    }
    td {
      padding: 12px;
      border-top: 1px solid #ddd;
      font-size: 14px;
      color: #333;
    }
    .footer {
      background-color: #f1f1f1;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #555;
    }
    .footer a {
      color: #007BFF;
      text-decoration: none;
    }
    .key {
      font-weight: bold;
      color: #555;
    }
    .value {
      color: #333;
    }
  </style>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th colspan="2">New Enquiry Submission</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="key">Full Name:</td>
        <td class="value">${enquiryData?.FullName}</td>
      </tr>
      <tr>
        <td class="key">Phone Number:</td>
        <td class="value">${enquiryData?.PhoneNumber}</td>
      </tr>
      <tr>
        <td class="key">Email:</td>
        <td class="value">${enquiryData?.Email}</td>
      </tr>
          <tr>
        <td class="key">Company Size:</td>
        <td class="value">${enquiryData?.CompanySize}</td>
      </tr>
          <tr>
        <td class="key">Company Size:</td>
        <td class="value">${enquiryData?.CompanyName}</td>
      </tr>
      </tr> 

    </tbody>
  </table>

  <div class="footer">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
    <p>For inquiries, visit <a href="https://www.dmcockpit.com/">our website</a>.</p>
  </div>

</body>
</html>
`;
}
