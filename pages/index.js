import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import useSwr from 'swr';
import fetcher  from '@/utils/fetcher';
import {
  Heading,
  Flex,
  Stack,
  Text,
  Avatar,
  Box,
  Image,
  Icon,
  Code,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';

import { getCategories } from "@/lib/db-admin";
import { getImage, getCategoryImages } from '@/lib/storage.js';

function getCategoriesImages() {

}
export async function getStaticProps(context) {
    // const categories  = await getCategories();
    // console.log("getCategories >>"+await getCategories());
    console.log("categories >>"+getCategoriesImages());
    // console.log("categories >>"+ categories);
    // categories.map((category) => {
    //   // console.log("stringify >>"+ JSON.stringify(getImage("categories/"+category.imageurl)));
    //   const imageUrl = getImage("categories/"+category.imageurl);
    //   console.log("imageUrl >>"+ imageUrl);
    //   categories.imageUrl = imageUrl;
    // });
  
    return {
      props: {
        categories: {categories :"categories"},
      },
      revalidate: 1
    };
  }
export default function Home({categories}) {
  const auth =  useAuth();
  const {users} = useSwr(auth.user?['/api/users', auth.user.token]: null, fetcher)

  // const {data} = useSwr('/api/categories', fetcher);
  console.log("categories>>>"+JSON.stringify(categories));
  
  return (      
    <Flex flexDirection="column">
    <Head>
        <title>My Shop</title>
      </Head>
      <Stack spacing={2} justifyContent="flex-end" isInline>
        <Box><Icon name="logo" /></Box>
        {auth?.user?(
          <Flex flexDirection="row">
            <Text>{auth?.user?.name}</Text>
            <Avatar ><Image src={auth.user.photoUrl} /></Avatar>
            <Button onClick={() => auth.signOut()}>Logout</Button>
            </Flex>
        ):(
          <Box>
             <Button onClick={() => auth.signInWithGoogle()}>Login</Button> 
             <Avatar/>
          </Box>
          )}
      </Stack>
      <Stack
        spacing={2}
        isInline
        justifyContent="flex-start"
        alignItems="center"
      >
      
      {categories.map((category, index) => (
        <Box key={index}>
          <Image height="100px" width="100px" src={category.imageUrl}/>
          <Text>{category.name}</Text>
          <Text>{category.imageUrl}</Text>
        </Box>
       ))}
      </Stack>
      <Flex flexDirection="column">
        <Box>
          <Text>Text value</Text>
        </Box>
        <Image height="100px" width="100px"/>
      </Flex>
    </Flex>
)

}