"use client"
import { prompts } from "@/lib/prompts"
import { Box, Flex, Image } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react"
import { WindupChildren,Pause} from "windups";
import AvatarThumbnail from "./AvatarThumbnail";
import AvatarsPlaceholders from "./AvatarsPlaceholders";
import urlSlug from "url-slug"
import Experience from "../3DComponents/Experience";



type Props = {}


// const MotionImage = motion(Image)
// const MotionBox = motion(Box)



const DemoFessjo = (props: Props) => {

  const [step,setStep]= useState<number>(0)

  const prompt = prompts[step]

  const names = ["romy","sacha"] as const

  const index = Math.random() >= 0.5 ? 1 : 0


 

  return (
    <Box ml={{ base: 20, lg: 10 }} mr="auto" width="100%" >
    

      <Flex justifyContent="space-between" mt={6} pr={6}>
          {/* <Box width="100%" position="relative" ml={10} className="" >
            <AvatarsPlaceholders character={names[index]} />
          </Box>
          <AnimatePresence mode="wait" >
              <MotionImage key={prompt.label} initial={{x:-30,opacity:0}} 
              animate={{x:0,opacity:1}} exit={{x:30,opacity: 0}} transition={{delay: 0.2}} shadow="2xl"
              borderRadius="3xl" width="14rem" height="14rem" zIndex={10} alt={prompt.label} src={`/prompts/${names[index]}/${urlSlug(prompt.label,{separator:"-"})}.png`} />
          </AnimatePresence> */}

         
              <Experience />
         
          

          
      </Flex>

    </Box>
  )
}

export default DemoFessjo