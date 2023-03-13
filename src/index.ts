interface trurnUrlParams {
  [key: string]: string;
}

/**
 * 获取url地址中的参数
 * @param url url地址
 * @returns
 */

export const getUrlParams: (url?: string) => trurnUrlParams | undefined = (url) => {
  const URL = url ?? location.href;
  let params: trurnUrlParams = {};
  if (!URL || typeof URL !== "string")
    throw new Error("url is not nodefind or type url ont string");
  URL.split("?")?.[1]
    ?.split("&")
    .forEach((item: string) => {
      const [key, value] = item?.split("=");
      params[key] = value;
    });
  return params ?? undefined;
};

export default {
  getUrlParams,
};
