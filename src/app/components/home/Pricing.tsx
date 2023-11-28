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

                <Box backgroundColor="white"
                    border="4px solid black"
                    borderRadius={10}
                    padding={8}
                    transition="all 250ms"
                >

                    <Text fontWeight="black" mt={2} fontSize="4xl">
                        Why not Free?
                    </Text>

                    <Text mb={4} mt={2}>
                        Training a custom AI model is expensive due to the resources required.
                    </Text>

                </Box>

                <Box backgroundColor="white"
                
                border="4px solid black"
                borderRadius={10}
                padding={8}
                transition="all 250ms"

                >

                    <Tag py={1} px={3} shadow="semibold" border="2px solid black" color="black" backgroundColor="brand.500">
                        1 Studio + 20 shots
                    </Tag>

                    <Box mt={2} fontWeight="black" fontSize="3.5rem">
                        $ 7.00

                        <Box ml={1} as="span" fontWeight={500} color="coolGray.400" fontSize="1.2rem" >
                            / studio
                        </Box>
                    </Box>

                    <List mt={2} mb={4} spacing={1} >
                            <CheckedListItem>
                                <b>1</b> Studio with a <b>custom trained model</b>
                            </CheckedListItem>
                            <CheckedListItem>
                                <b>20</b> avatars 4k generation
                            </CheckedListItem>
                            <CheckedListItem>
                                <b>30</b> AI Prompt assists
                            </CheckedListItem>
                            <CheckedListItem>
                                Craft your own prompt
                            </CheckedListItem>
                            <CheckedListItem>
                                Sponsorship development
                            </CheckedListItem>
                    </List>


                </Box>

           

        </SimpleGrid>
    );
}
 
export default PricingComponent;