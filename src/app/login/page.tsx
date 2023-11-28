import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../components/layout/AuthForm'

const Login = () => {
  return (
    <Flex flex={'1'} align={'center'} justify={'center'} >

        <AuthForm />

    </Flex>
  )
}

export default Login