import { Flex, FlexProps } from "@chakra-ui/react";

const PageContainer = (props: FlexProps) => {
    return (
        <Flex 

            width="100%"
            maxWidth="container.lg"
            flex="1"
            pt={10}
            flexDirection="column"
            marginX="auto"
            px={4}
            {...props}
        
        />
    );
}
 
export default PageContainer;