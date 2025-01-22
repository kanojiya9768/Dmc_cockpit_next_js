import { GET_CALL, POST_CALL } from "../api-config";
import { objectToQueryParams } from "../helperFunctio";
import {
  Plans_And_Pricing_Listing_Api_Route,
  Plans_And_Pricing_Sub_Category_Api_Route,
  Stripe_Direct_Api_Route,
} from "../url-constant";

export const GetPlansPricingSubCategoryApi = async () => {
  try {
    const response = await GET_CALL(Plans_And_Pricing_Sub_Category_Api_Route);
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const GetPlansPricingListingApi = async (params: {
  sub_type: string;
  sub_cat_id: number;
}) => {
  try {
    const response = await GET_CALL(
      `${Plans_And_Pricing_Listing_Api_Route}?${objectToQueryParams(
        params?.sub_type ? params : {}
      )}`
    );
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const StripeDirectApi = async (data: unknown) => {
  try {
    const response = await POST_CALL(Stripe_Direct_Api_Route, data);
    return response;
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};
