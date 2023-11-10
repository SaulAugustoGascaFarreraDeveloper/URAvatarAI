"use client"
import CharacterSwitcher, { TCharacter } from "@/app/components/home/CharacterSwitcher";
import TiltImage from "@/app/components/home/TiltImage";
import PageContainer from "@/app/components/layout/PageContainer";
import { prompts } from "@/lib/prompts";
import { Button, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import {BsArrowRight} from "react-icons/bs"

interface PromptsPageProps{
    title?: string
    description?:string
}


const PromptsPage = ({title,description}:PromptsPageProps) => {

    const [character,setCharacter] = useState<TCharacter>("romy")

    title = "AI prompts Inspiration"
    description = "Our free AI Prompt covers a wide range of themes and topics to help you create a unique avatar. Use them with our studio or your stable Diffusion or Dreambooth models"

    return (
        <PageContainer>
            <VStack
                borderRadius="xl"
                width="100%"
                mb={10}
                flex="1"
                alignItems="flex-start"

            >
                <Text
                    fontSize={{base: "3xl",md:"4xl"}}
                    fontWeight="extrabold"
                    as="h1"
                >
                    {title}
                </Text>

                <Text color="beige.500" maxWidth="container.md" fontSize={{base:"lg",md:"xl"}} as="h2">
                    {description}
                </Text>

            </VStack>

            <Flex position="relative" alignItems="space-between" flexDirection={{base:"column",md:"row-reverse"}} >
                <Flex mb="10" justifyContent="center" flex="1">
                    <CharacterSwitcher onCharacterChange={(character) => {
                        setCharacter(character)
                    }} />
                </Flex>

                <VStack flex="2" spacing={2} divider={<Divider />}>
                    {
                        prompts.map((prompt) => {
                            return(
                                <Flex 
                                    key={prompt.label}
                                    p={4}
                                    gap={4}
                                    borderRadius="xl"
                                    backgroundColor="white"
                                >
                                    <TiltImage character={character} slug={prompt.slug} size={180}  />
                                    <VStack justifyContent="space-between" alignItems="flex-start">
                                        <VStack alignItems="flex-start">
                                                <Text textTransform="capitalize" fontWeight="bold" 
                                                fontSize={{base:"xl",md:"2xl"}} as="h3" >
                                                    {prompt.label} prompt
                                                </Text>
                                                <Text noOfLines={3} fontSize="sm" fontFamily="mono" color="beige.700" >
                                                    {prompt.prompt}
                                                </Text>
                                        </VStack>
                                        <HStack justifyContent="flex-end" width="100%" textAlign="right" >
                                            <Button colorScheme="beige" variant="outline" 
                                            rightIcon={<BsArrowRight />} href="" as={Link} size="sm" >
                                                View
                                            </Button>
                                        </HStack>

                                    </VStack>
                                </Flex>
                            )
                        })
                    }

                </VStack>

            </Flex>

        </PageContainer>
    );
}
 
export default PromptsPage;