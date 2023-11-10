
import { Box, Button, Container, Stack, Text,chakra } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {FaGithub,FaInstagram,FaWhatsapp,FaYoutube} from "react-icons/fa"
import {MdAlternateEmail} from "react-icons/md"

type SocialButtonProps = {
    children: React.ReactNode
    href: string
}


const SocialButton = ({children,href}:SocialButtonProps) => {

    return(

        <Button href={href} as="a" bg="blackAlpha.100" rounded="full" w={8} h={8} 
        target="_blank" cursor="pointer" display="inline-flex" alignItems="center" justifyContent="center" 
        transition="background 0.3s ease" _hover={{bg:"blackAlpha.400"}}  >
                <div className="text-2xl">
                {children}
                </div>
                
        </Button>

        // <Link href={href}>
        //     {children}
        // </Link>

    )

}



const FooterComponent = () => {
    return (
        <Box >
            <Container as={Stack} maxWidth="container.lg" py={4} direction={{base:"column",md:"row"}} spacing={6} 
            justify={{base:"center",md:"space-between"}} align={{base:"center",md:"center"}} >

                    
                    
                    
                    <Stack alignItems="center" direction="row" spacing={4} className="ml-auto">
                            

                            <Text><b>email: </b> felipegasca3@yahoo.com.mx </Text>

                            <SocialButton href="https://api.whatsapp.com/send?phone=4427513077">
                                <FaWhatsapp  />
                            </SocialButton>

                            

                            <Text display={{base:'none',md:'block'}} fontSize="lg" fontWeight="bold" >
                                FESSJO.
                            </Text>
                                

                            

                           
                    </Stack>    

            </Container>
        </Box>
    );
}
 
export default FooterComponent;