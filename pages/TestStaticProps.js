import { getCategories } from "@/lib/db-admin";
import {Box, Text} from '@chakra-ui/react';
export async function getStaticProps(context) {
  const categories  = await getCategories();
    console.log("getCategories >>"+await getCategories());
    console.log("categories >>"+ categories);

  return {
    props: {
      categories: categories,
    },
    revalidate: 1
  };
}

export default function TestStaticProps({categories}) {
  categories.map((category, index) => {console.log(index+"category >>"+category.name)});
    return (
      <Box>
      {categories.length}
      {JSON.stringify(categories)}
      <ul>
      {categories.map((setting, index) => (
          <li key={index}>{setting.name}</li>
      ))}
     </ul>
     <ul>
      {categories.map((setting, index) => (
        <li key={index} >{setting.name}</li>
      ))}
      </ul>
      </Box>
      )
    }