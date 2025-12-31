import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: import.meta.env.MICROCMS_API_KEY || '',
});

// endpoint を "photos" に修正
export const getBlogs = async (queries?: any) => {
  return await client.get({ endpoint: "photos", queries });
};

// ここも "photos" に修正
export const getBlogDetail = async (contentId: string, queries?: any) => {
  return await client.get({
    endpoint: "photos",
    contentId,
    queries,
  });
};