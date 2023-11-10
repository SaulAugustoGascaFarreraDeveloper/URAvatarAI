import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {
    src: string
}

function AvatarThumbnail({src,...props}: Props & BoxProps) {
  return (
    <Box width="80px"
        shadow="lg"
        overflow="hidden"
        borderRadius="md"
        {...props}>

    <Image alt='avatar' src={src} width={80} height={80} unoptimized />

    </Box>
  )
}

export default AvatarThumbnail