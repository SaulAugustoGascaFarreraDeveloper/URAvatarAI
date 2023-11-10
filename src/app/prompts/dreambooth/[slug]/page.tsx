// src/app/prompts/dreambooth/[slug]/page.tsx

import PageContainer from "@/app/components/layout/PageContainer";
import { prompts } from "@/lib/prompts";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import { GetStaticPropsContext } from "next";
import Link from "next/link";

export type TPrompt = (typeof prompts)[number];

interface PromptPageProps {
  params: {
    slug: string;
  };
}

export default function PromptPage({ params }: PromptPageProps) {
  // Obtén el slug del parámetro
  const { slug } = params;

  // Busca el prompt correspondiente en la lista de prompts
 // Utiliza TPrompt para especificar el tipo de 'prompt'
 const prompt: TPrompt | undefined = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    // Manejar el caso en el que el prompt no se encontró
    return (
      <div>
        <p>Prompt not found</p>
      </div>
    );
  }

  console.log(params)

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
            Become the {prompt.label} with our free AI
          </Text>
          
        </VStack>
      </Flex>
    </PageContainer>
  );
}
