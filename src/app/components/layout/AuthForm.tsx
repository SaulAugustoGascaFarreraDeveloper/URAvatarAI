"use client"
import { Box, Button, FormControl, FormLabel, Input, Stack,Text} from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { FaPaperPlane, FaPlaneArrival } from 'react-icons/fa'
import { useMutation } from 'react-query'

const AuthForm = () => {

    const [email,setEmail] = useState<string>("")

    const {mutate: onLogin,isLoading,isSuccess} = useMutation("onLogin",() => 
        signIn("email",{email,redirect: false,callbackUrl:"/prompts"})
    )

  return (
    <Stack spacing={4} width={'100%'} maxW={'md'} py={12} px={6} >
        <Stack textAlign={'center'} align={'center'} spacing={0} >
            <Text fontWeight={'extrabold'} as={'h2'} fontSize={'4xl'} >
                Sign In to URAvatar
            </Text>
            <Text fontSize={'lg'} >
                Use your email address to sign in
            </Text>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} >
            <Stack as="form" onSubmit={async (e) => {
                e.preventDefault()

                if(email)
                {
                    onLogin()
                }

            }} spacing={4} >

                <FormControl id='email' >
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder='youremail@gmail.com'
                        type='email'
                    />
                </FormControl>

                <Stack spacing={10}>
                    <Button isLoading={isLoading} rightIcon={<FaPaperPlane />} type='submit' variant={'brand'} >
                        Send Magic Link
                    </Button>
                </Stack>

            </Stack>
        </Box>
    </Stack>
  )
}

export default AuthForm