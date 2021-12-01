import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useAuth } from '@/lib/auth'
import {Heading, Icon, Text, Code, Button, Flex, Box, Link} from '@chakra-ui/react';
import userSwr from 'swr';
import fetcher  from '@/utils/fetcher';

export default function Home() {
  const auth =  useAuth();
  const {users} = userSwr(auth.user?['/api/users', auth.user.token]: null, fetcher)

  return (
    <Flex as="main" direction="column" maxW="700px" margin="0 auto">
      <Head>
        <title>My Shop</title>
      </Head>

        <Heading> The Shop </Heading>
        <Icon name="logo" />
        {auth?.user && (
          <Text> 
          Current User: <Code>{auth?.user?.name}</Code>
          </Text>
        )}
         {auth?.user? (
           <Button onClick={() => auth.signOut()}>Logout</Button>

         ):(
           <Button onClick={() => auth.signInWithGoogle()}>Login</Button>
           )}
    </Flex>
  )
}
