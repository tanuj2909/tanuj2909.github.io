import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      // worksImage1: z.object({
      //   url: z.string(),
      //   alt: z.string()
      // }),
      // worksImage2: z.object({
      //   url: z.string(),
      //   alt: z.string()
      // }),
      stack: z.string(),
      github: z.string(),
    })
});

export const collections = {
  projects: projectsCollection,
};

