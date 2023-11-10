"use client"
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import AvatarsPlaceholders from "./AvatarsPlaceholders";

export type TCharacter = "romy" | "sacha"

const CharacterSwitcher = ({onCharacterChange}: {onCharacterChange: (character: TCharacter) => void}) => {

    const [character,setCharacter] = useState<TCharacter>("romy")

    const onChangeCharacter = (character:TCharacter) => {
        setCharacter(character)
        onCharacterChange(character)
    }

    return (
        <Box>
            <Box display={{base:"none",md:"block"}} position="relative">
                <AvatarsPlaceholders character={character} />
            </Box>
            <ButtonGroup pl={4} mt={4}
            mx="auto" size="sm" isAttached variant="outline" >
                <Button variant={character === "romy" ? "brand" : "outline"} onClick={() => onChangeCharacter("romy")}>
                    Romy
                </Button>
                <Button variant={character === "sacha" ? "brand" : "outline"} onClick={() => onChangeCharacter("sacha")}>
                    Sacha
                </Button>
            </ButtonGroup>
        </Box>
    );
}
 
export default CharacterSwitcher;