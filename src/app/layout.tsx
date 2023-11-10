import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { theme } from './styles/theme'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import FooterComponent from './components/layout/Footer'
import HeaderComponent from './components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UR Avatar Studio',
  description: 'Generated by Saul Augusto Gasca Farrera',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
         
              <html lang="en">
                <body className={cn(inter.className)}>
                  
                  <Providers>
                    <HeaderComponent />
                        {children}
                        <FooterComponent />
                  </Providers>
                    
                
                  
                  </body>
              </html>

        
    
  )
}
