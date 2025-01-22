// utils.ts

type QueryParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | QueryParams;
interface QueryParams {
  [key: string]: QueryParamValue | QueryParamValue[];
}

export const objectToQueryParams = (params: QueryParams): string => {
  const toQueryString = (obj: QueryParams, prefix: string = ""): string => {
    return Object.entries(obj)
      .flatMap(([key, value]) => {
        const paramKey = prefix
          ? `${prefix}[${encodeURIComponent(key)}]`
          : encodeURIComponent(key);

        if (Array.isArray(value)) {
          return value.map(
            (item) => `${paramKey}=${encodeURIComponent(String(item))}`
          );
        } else if (typeof value === "object" && value !== null) {
          return toQueryString(value as QueryParams, paramKey);
        } else {
          return `${paramKey}=${encodeURIComponent(String(value))}`;
        }
      })
      .join("&");
  };

  return toQueryString(params);
};
