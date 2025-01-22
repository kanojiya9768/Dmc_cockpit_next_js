export type SignUpFormInterface = {
  FirstName: string;
  LastName: string;
  CountryCode: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
};

export type LoginFormInterface = {
  email: string;
  password: string;
};

export type ForgotPasswordFormInterface = {
  email: string;
};

export type ModalStepStoreInterface = {
  step: string;
  openModal: boolean;
  setStep: (data: string) => void;
  setopenModal: (data: boolean) => void;
};

export type UserData = {
  sCustomerId: string;
  parentId: string;
  subIds: number[];
  subType: "user" | "agency";
  subCategory: string;
  userRoles: "superAdmin" | "admin" | "user";
};

export interface UserCheckStatusApiResponse {
  data: UserData | null; // data can be UserData or null
  status: number; // HTTP status code
  error: string | null; // Error message or null if no error
}

export type LoggedInUserStoreInterface = {
  LoggedInUser: UserData | null;
  storeLoggedInUser: (data: UserData) => void;
};

export type ContactUsFormInterface = {
  FullName: string;
  CountryCode: string;
  CompanyName: string;
  CompanySize: string;
  JobRole: string;
  Country: string;
  PurposeOfCall: string;
  PhoneNumber: string;
  Email: string;
  Message: string;
};

export type ShortContactUsFormInterface = {
  FullName: string;
  PhoneNumber: string;
  Email: string;
  CompanySize: string;
  CompanyName: string;
};

export type SendMailAPIResponse = {
  status: "error" | "success" | undefined;
  errors?: { [key: string]: string[] };
  message: string;
};

export interface List {
  value: string;
  tooltip: string;
  checkbox: boolean;
}

export interface FeatureList {
  list: List[];
  label: string;
}

export enum Name {
  AccountFeatures = "Account features",
  AnalyticsReporting = "Analytics & Reporting",
  BacklinkCheckerAndMonitor = "Backlink Checker and Monitor",
  OnPageWebsiteAudit = "On Page / Website Audit",
  RankTracker = "Rank Tracker",
  TeamsIntegrations = "Teams & Integrations",
}

export enum DefaultName {
  AccountFeatures = "account_features",
  Backlink = "backlink",
  OnPageWebsiteAudit = "on_page_website_audit",
  RankTracker = "rank_tracker",
  Reporting = "reporting",
  Teams = "teams",
}

export enum Type {
  Checkbox = "checkbox",
  Input = "input",
}

export interface FeatureItem {
  id: number;
  subscription_id: number;
  sub_feature_id: number;
  sub_cat_id: number;
  label: string;
  default_label: string;
  value: string;
  type: Type;
  default: number;
  tooltip: string;
  created_at: Date;
  updated_at: Date;
}

export interface SubscriptionFeature {
  id: number;
  subscription_id: number;
  sub_cat_id: number;
  name: Name;
  default_name: DefaultName;
  default: number;
  position: number;
  json: null;
  feature_items: FeatureItem[];
}

export interface Recurring {
  meter: null;
  interval: string;
  usage_type: string;
  interval_count: number;
  aggregate_usage: null;
  trial_period_days: null;
}

export interface StripeJSON {
  id: string;
  type: string;
  active: boolean;
  object: string;
  created: number;
  product: string;
  currency: string;
  livemode: boolean;
  metadata: unknown;
  nickname: null;
  recurring: Recurring;
  lookup_key: null;
  tiers_mode: null;
  unit_amount: number;
  tax_behavior: string;
  billing_scheme: string;
  custom_unit_amount: null;
  transform_quantity: null;
  unit_amount_decimal: string;
}

export interface KeywordRange {
  id: number;
  subscription_id: number;
  keyword_range: number;
  price: number;
  is_default: number;
  inr: null | string;
  usd: string;
  aed: null;
  aud: null;
  cad: null;
  eur: null;
  gbp: null;
  sgd: null;
  is_stripe_default: number;
  stripe_json: StripeJSON;
  created_at: Date;
  updated_at: Date;
}

export interface Annually {
  id: number;
  sub_cat_id: number;
  name: string;
  validity_type: string;
  validity: string;
  price: number;
  default: number;
  is_stripe_default: number;
  product_id: string;
  stripe_json: string;
  is_sub_special: number;
  feature_list: FeatureList;
  is_hide: number;
  sub_type: string;
  is_free: number;
  created_at: Date;
  updated_at: Date;
  cat_name: string;
  cat_default_name: string;
  subscription_feature: SubscriptionFeature[];
  keyword_ranges: KeywordRange[];
}

export interface SubCategoryResponse {
  data: {
    data: Array<{
      id: number;
      name: string;
    }>;
  };
}

export interface PlansListingResponse {
  data: {
    data: {
      annually: Annually[];
      monthly: Annually[];
    };
  };
}

export type plansTypes_Type = {
  id: number;
  name: string;
};

export type PlansListing_Type = {
  annually: Annually[];
  monthly: Annually[];
};

export type PlanListingParamsType = {
  sub_type: string;
  sub_cat_id: number;
};
