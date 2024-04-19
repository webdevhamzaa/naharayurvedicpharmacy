import { defineType } from "sanity";

export const blog = defineType({
    title: "Blog",
    name: "blog",
    type: "document",
    fields: [
        // Title
        {
            title: "Blog Title",
            name: "title",
            type: "text",
            rows: 1,
            validation: Rule => Rule.required().error("Please enter blog title")
        },
        // Slug
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: "title",
            },
            validation: Rule => Rule.required()
        },
        // Short Description (excerpt)
        {
            title: "Short Description (excerpt)",
            name: "excerpt",
            type: "text",
            rows: 3,
            validation: Rule => Rule.required().error("Please enter short description.")
        },
        // Content
        {
            title: "Content",
            name:"content",
            type: "array",
            of: [{ type: 'block' }, { type: 'image' }],
            validation: Rule => Rule.required().max(500)
        },
        // Category
        {
            title: "Category",
            name: "category",
            type: "string",
            validation: Rule => Rule.required().error("Please select a category.")
        },
        // Tags
        {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [{ type: 'string' }],
        },
        // Meta Description
        {
            title: "Meta Description (150-160 characters)",
            name: "metaDescription",
            type: "text",
            rows: 2
        },
    ],
});
