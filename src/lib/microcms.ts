import { createClient } from "microcms-js-sdk";

if (!import.meta.env.MICROCMS_SERVICE_DOMAIN || !import.meta.env.MICROCMS_API_KEY) {
  console.warn("microCMSの環境変数が設定されていません。");
}

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: import.meta.env.MICROCMS_API_KEY || '',
});

export const getBlogs = async (queries?: any) => {
  return await client.get({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (contentId: string, queries?: any) => {
  return await client.get({
    endpoint: "blogs",
    contentId,
    queries,
  });
};