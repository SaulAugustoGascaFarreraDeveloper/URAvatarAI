// src/app/prompts/dreambooth/[slug]/page.tsx
"use client"
import PageContainer from "@/app/components/layout/PageContainer";
import { prompts } from "@/lib/prompts";
import { Box, Button, Flex, HStack, SimpleGrid, Text, VStack, useClipboard } from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import TiltImage from "@/app/components/home/TiltImage";
import { FaMagic } from "react-icons/fa";

export type TPrompt = (typeof prompts)[number];

interface PromptPageProps {
  params: {
    slug: string;
  };
}



export default function PromptPage({ params }: PromptPageProps) {


  // Obtén el slug del parámetro
  const { slug } = params;

  const prompt: TPrompt | undefined = prompts.find((p) => p.slug === slug);

  const morePrompts: TPrompt[] | undefined = prompts

  

  if (!prompt) {
    // Manejar el caso en el que el prompt no se encontró
    return (
      <div>
        <p>Prompt not found</p>
      </div>
    );
  }


  const {hasCopied,onCopy} = useClipboard(prompt.prompt)
 

  

  // Busca el prompt correspondiente en la lista de prompts
 // Utiliza TPrompt para especificar el tipo de 'prompt'
 

 

  

  

  return (
    <PageContainer>
      <Box mb={4}>
        <Button color="beige.500" leftIcon={<HiArrowLeft />} variant="link" href="/prompts" as={Link}>
          Back to prompts
        </Button>
      </Box>

      <Flex flexDirection="column" p={{ base: 6, md: 10 }} pt={8} backgroundColor="white" alignItems="flex-start">
        <VStack spacing={0} alignItems="flex-start">
          <Text textTransform="capitalize" fontWeight="extrabold" fontSize={{ base: "2xl", md: "3xl" }} as="h1">
            {prompt.label} avatar prompt
          </Text>
          <Text fontSize={{ base: "xm", md: "xl" }} as="h2">
            Become the {prompt?.label} with our free AI
          </Text>
          
        </VStack>

        <Flex flexDirection={{base:"column-reverse",sm:"row"}} 
        mt={{base:4,md:10}} width={'100%'} gap={4} >

            <Flex flex={'1'} alignItems={{base:'center',md:'flex-start'}} flexDirection={{base:'column',md:'row'}} gap={4} >

              <TiltImage size={220} character="romy" slug={prompt.slug} />
              <TiltImage size={220} character="sacha" slug={prompt.slug} />

            </Flex>

            <VStack flex={1} spacing={5}>
                <Text fontFamily={'mono'}>
                  {prompt.prompt}
                </Text>
                <HStack justifyContent={'flex-end'} width={'100%'} textAlign={'right'} >
                    <Button onClick={onCopy} variant={'ghost'} colorScheme="beige"  >
                          {hasCopied ? "Copied!" : "Copy prompt"}
                    </Button>
                    <Button variant={'brand'} textTransform={'capitalize'} href={""} as={Link} rightIcon={<FaMagic />} >
                        Use Prompt
                    </Button>
                </HStack>
            </VStack>
          
        </Flex>
      </Flex>

      <VStack alignItems="flex-start" overflow="hidden" my={10}>
        <Text fontWeight="bold" fontSize="2xl">
          More AI Prompts
        </Text>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          width="100%"
          marginX="auto"
        >
          {morePrompts.map((prompt, i) => (
            <Link
              key={prompt.label}
              href={`/prompts/dreambooth/${prompt.slug}`}
            >
              <VStack p={2} alignItems="flex-start" spacing={1}>
                <TiltImage
                  size={150}
                  character={i % 2 ? "sacha" : "romy"}
                  slug={prompt.slug}
                />
                <Text
                  color="beige.500"
                  fontWeight="semibold"
                  textTransform="capitalize"
                >
                  {prompt.label}
                </Text>
              </VStack>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>


    </PageContainer>
  );
}
