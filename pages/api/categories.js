import { getCategories } from "@/lib/db-admin"

export default async (req, res) => {
    const {categories} =  getCategories();
   console.log("categories api");
  res.status(200).json(categories);
}
