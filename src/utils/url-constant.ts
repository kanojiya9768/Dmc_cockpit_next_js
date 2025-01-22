export const environment = "online";

//base url
export const BASE_URL = `https://${environment}.dmcockpit.com/backend/api`;

//routes for authentication
export const Login_Api_Route = "/login";
export const Check_User_Login_Status_Api_Route = "/check-user-login-status";
export const Forgot_Password_Api_Route = "/forgot-password";

//routes for plans and pricing
export const Plans_And_Pricing_Sub_Category_Api_Route = "/sub-category";
export const Plans_And_Pricing_Listing_Api_Route = "/v2-plan-list";
export const Stripe_Direct_Api_Route = "/stripe-direct-subscription-payment";
