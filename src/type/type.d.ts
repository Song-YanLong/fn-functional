export interface trurnUrlParams {
  [key: string]: string;
}

export type getUrlParamsType = (url?: string) => trurnUrlParams | undefined;
