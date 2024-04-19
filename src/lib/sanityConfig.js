import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity/lib/client';

const builder = imageUrlBuilder(client);

class SanityService {
    async getAllBlogs(filter, query) {
        try {
            return await client.fetch(`*[_type=="blog" ${filter || ""} ] ${query || ""} `);
        } catch (error) {
            console.error("Error fetching All products: ", error);
            throw error;
        }
    }

    async getBlogsBySlug(slug, query) {
        try {
            return await client.fetch(`*[_type=="blog" && slug.current == "${slug}"] ${query || ""} `);
        } catch (error) {
            console.error("Error fetching product by Slug:", error);
            throw error;
        }
    }

    getImageUrl(source) {
        return builder.image(source);
    }
}

const sanityService = new SanityService();
export default sanityService;