import { defineCollection, z } from "astro:content";

const recentWork = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  "recent-work": recentWork,
};
