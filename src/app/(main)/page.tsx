import Image from 'next/image'
import Hero from '../components/home/Hero'
import { Flex } from '@chakra-ui/react'
import SliderComponent from '../components/home/Slider'
import FeaturesComponent from '../components/home/Features'
import PricingComponent from '../components/home/Pricing'

export default function Home() {
  return (
   <div>
      <Flex flexDirection="column" marginX="auto" flex="1" >
          <Hero />
      </Flex>
      
      <SliderComponent />
      
      
      <FeaturesComponent />

      
      <Flex width="100%" marginX="auto" maxWidth="container.lg" px={4} py={10}>
          <PricingComponent />
      </Flex>
      
   </div>
  )
}
