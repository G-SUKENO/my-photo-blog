import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得する関数
export const getBlogs = async (queries?: any) => {
  return await client.get({ endpoint: "blogs", queries });
};

// ブログの詳細を取得する関数
export const getBlogDetail = async (contentId: string, queries?: any) => {
  return await client.get({
    endpoint: "blogs",
    contentId,
    queries,
  });
};