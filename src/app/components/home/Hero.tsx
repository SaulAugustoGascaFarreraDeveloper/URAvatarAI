"use client"
import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import {HiArrowRight} from "react-icons/hi"
import Demo from "./Demo"
import { useEffect, useState } from "react"
import DemoFessjo from "./DemoFessjo"
import { FaWhatsapp } from "react-icons/fa"

type Props = {}

const Hero = (props: Props) => {

    const [isMounted,setIsMounted] = useState<boolean>(false)

    useEffect(()=>{

        setIsMounted(true)

    },[])

    if(!isMounted)
    {
        return null
    }

  return (
    <Box px={{base: 2,md: 6}} >
        <SimpleGrid as="main" 
            minHeight="30rem"
            flex="1"
            flexDirection="column"
            marginX="auto"
            maxWidth="container.lg"
            columns={{base:1,lg:2}}
            px={{base: 4,lg: 0}}
            py={{base: 10,lg: 0}}
            gap={{base: 10,lg: 0}}
        >

            <VStack className="" 
                alignItems={{base:"center",sm:"flex-start"}} 
                spacing={10}
                justifyContent="center"
                flexDirection="column"
            >
                <Box textAlign={{base:"center",sm:"left"}}>
                    <Box mb={3} as="h1" maxWidth="43rem" lineHeight={{base:"2.6rem",sm:"4rem"}} 
                    fontSize={{base:"2.6rem",sm:"4rem"}} fontWeight="black" >
                            FESSJO
                    </Box>
                   
                            

                        <Text color="black" maxWidth="container.md" fontSize={{base:"lg",md:"xl"}} as="h2">
                        <b>FESSJO</b> es una empresa especializada y enfocada en la <b>importación</b>, 
                        <b>venta</b> y <b>reparación</b> de maquinaria convencional , CNC y fundición en aluminio para la industria.
                        </Text>
                            
                            
                            
                    
                </Box>
                <Link href="https://api.whatsapp.com/send?phone=4427513077" passHref>
                    <Button 
                        
                        as="a"
                        href=""
                        variant="brand"
                        size="lg"
                        shadow="xl"
                        rightIcon={<HiArrowRight />}
                    >
                        Whats app (442 751 3077) <FaWhatsapp className="ml-2 w-6 h-6" />
                    </Button>
                </Link>
               
            </VStack>

            <Flex alignItems="center">
                    <DemoFessjo />
            </Flex>

        </SimpleGrid>
    </Box>
  )
}

export default Hero