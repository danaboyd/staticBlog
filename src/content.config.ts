import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";



const blog = defineCollection({
    loader: glob({pattern: "**/*.{md,mdx}", base: "./src/pages/blog"}),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        date: z.date(),
        author: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }).optional(),
        description: z.string().optional(),
        draft: z.boolean(),
        category: z.string(),
        tags: z.array(z.string()).optional()

    })
})

export const collections = { blog }