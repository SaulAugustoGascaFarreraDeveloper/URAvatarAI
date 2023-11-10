import { Box } from "@chakra-ui/react";
import { TCharacter } from "./CharacterSwitcher";
import Tilt from "react-parallax-tilt"
import Image from "next/image";



interface TiltImageProps{
    character: TCharacter
    slug: string
    size: number
}

const TiltImage = ({character,slug,size}:TiltImageProps) => {
    return (
        <Box>
            <Tilt
                glareEnable
                glareMaxOpacity={0.4}
                glareColor="#B5FFD9"
                glarePosition="all"
                glareBorderRadius="10px"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                style={{height: size,width: size}}
            >
                <Image 

                    style={{borderRadius: 10}}
                    src={`/prompts/${character}/${slug}.png`}
                    alt={slug}
                    width="512"
                    height="512"
                    unoptimized

                />

            </Tilt>
        </Box>
    );
}
 
export default TiltImage;