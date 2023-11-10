// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    
  )
}