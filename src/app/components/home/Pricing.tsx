"use client"
import { Box, List, ListIcon, ListItem, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

const CheckedListItem = ({children}: {children: React.ReactNode}) => {

    return(
        <ListItem>
            <ListIcon fontSize="xl" as={HiBadgeCheck}  /> {children}
        </ListItem>
    )

}


const PricingComponent = () => {
    return ( 
        <SimpleGrid width="100%" spacing={6} columns={{base:1,md: 2}}>

            <Box 
                backgroundColor="white"
                border="4px solid black"
                borderRadius={10}
                padding={8}
                transition="all 250ms"
            >
                <Text mt={2} fontWeight="black" fontSize="3xl" >
                  Información Importante
                </Text>
                <Text mt={2} mb={4} >
                    <b>FESSJO</b> atualmente se encuentra migrando su sitio web a un nuevo estandar tecnologico web, por
                    lo que puede visitar nuestro sitio web actual en el siguiente  link.
                </Text>
                <Link href="https://fessjo.vercel.app" className="border-b-2 border-black">
                    Sitio Web FESSJO
                </Link>
                <Text mt={4} fontSize="1xl" >
                  (**esta landing page no representa el sitio final)
                </Text>
            </Box>

            
            <Box 
                backgroundColor="white"
                border="4px solid black"
                borderRadius={10}
                padding={8}
                transition="all 250ms"
            >

                <Tag py={1} px={3} shadow="semibold" border="2px solid black" color="black" backgroundColor="#67C3EA" >
        	        Servicios
                </Tag>

                <Box mt={2} fontWeight="black" fontSize="1.5rem" >
                    ofrecemos                    
                </Box>

                <List mt={2} mb={4} spacing={1}>
                    <CheckedListItem>
                        Venta de equipo nuevo y seminuevo
                    </CheckedListItem>
                    <CheckedListItem>
                        Suministros de partes orginales y compatibles 
                    </CheckedListItem>
                    <CheckedListItem>
                        Envío rápido y seguro a nivel nacional
                    </CheckedListItem>
                    <CheckedListItem>
                        Precios competitivos
                    </CheckedListItem>
                    <CheckedListItem>
                        Diagnóstico y solución de problemas
                    </CheckedListItem>
                </List>

            </Box>

        </SimpleGrid>
    );
}
 
export default PricingComponent;