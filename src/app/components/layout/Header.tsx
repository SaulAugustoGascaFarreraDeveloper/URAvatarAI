"use client"
import { Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import {IoIosFlash} from "react-icons/io"

const HeaderComponent = () => {
    return (
        <Flex
            width="100%"
            flexDirection="column"
            marginX="auto"
            maxWidth="container.lg"
            px="2"
        >

            <Flex justifyContent="space-between" py={4} as="footer">
                <Flex role="group" 
                    as={Link} 
                    href="/"
                    alignItems="center"
                    fontWeight="bold"
                    fontSize="2xl"
                >

                    <Icon transition="200ms all" _groupHover={{color: "brand.500"}} as={IoIosFlash} />

                   <Text display={{base:"inherit",md:"inherit"}}>
                        URAvatar.
                   </Text>
                </Flex>

                

            </Flex>

        </Flex>
    );
}
 
export default HeaderComponent;