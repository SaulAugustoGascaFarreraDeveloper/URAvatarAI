import { Flex,Image,SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";

interface ItemProps{
    iconName: string
    title: string
    children: React.ReactNode
}


const Item = ({iconName,title,children}:ItemProps) => {
    return ( 
        <Flex align="center" direction="column" p={4} >
            {iconName !== "preview.svg" ? <Image alt="logo" src={iconName} width="8rem"  /> : <Image className="animate-pulse" alt="logo" src={iconName} width="8rem"  />}
            <Text textAlign="center" fontWeight="900" fontSize="lg">
                {title}
            </Text>
            <Text maxWidth={{base: "20rem",lg: "13rem"}} textAlign="center" mt={2} fontSize="lg">
                {children}
            </Text>
        </Flex>
    );
}


const FeaturesComponent = () => {
    return ( 
        <Flex width="100%" backgroundColor="whiteAlpha.900" py={10} flex="1" >
            <Flex
                width="100%"
                px={{base: 4,lg:0}}
                py={4}
                flexDirection="column"
                margin="auto"
                maxWidth="container.lg"
            >
                <SimpleGrid mb={10} columns={{base: 1,md: 3}}>

                    <Item iconName="/fessjo/maquina1.png" title="1. Importación y Venta de Maquinaria">
                    En <b>FESSJO</b> , nos especializamos en la importación y venta de maquinaria de alta calidad para la industria.
                    </Item>

                    <Item iconName="/fessjo/maquina3.jpg" title="2. Partes y Refacciones">
                    En <b>FESSJO</b> , nos especializamos en ofrecer una amplia gama de partes y refacciones para maquinaria industrial.
                    </Item>

                    
                    <Item  iconName="/fessjo/maquina2.png" title="3. Reparación, Mantenimiento y Programcion">
                    En <b>FESSJO</b> , ofrecemos servicios de reparación y mantenimiento de maquinaria.
                    </Item>
                    
                   

                    
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}
 
export default FeaturesComponent;