import { getCategories } from "@/lib/db-admin";
import { getImage } from '@/lib/storage.js';

export async function getStaticProps(context) {
    const { categories } = await getCategories();
    console.log("categories >>"+categories);
    categories.map((category) => {
        categories.imageUrl = getImage("categories/"+category.imageUrl);
    });
  
    return {
      props: {
        categories: categories,
      },
      revalidate: 1
    };
  }