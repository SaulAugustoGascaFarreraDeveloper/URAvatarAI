// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import {SessionProvider} from "next-auth/react"
import {QueryClient, QueryClientProvider} from "react-query"


const queryClient = new QueryClient()

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    
      <ChakraProvider theme={theme}>
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                  {children}
            </QueryClientProvider>
            
        </SessionProvider>
        
      </ChakraProvider>
    
  )
}