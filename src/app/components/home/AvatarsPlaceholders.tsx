import React from 'react'
import AvatarThumbnail from './AvatarThumbnail'

type Props = {
    character: "romy" | "sacha" 
}

function AvatarsPlaceholders({character}: Props) {
  return (
    <div>
        <AvatarThumbnail  src={`/prompts/${character}/dataset/1.png`}  transform="rotate(10deg)" />
        <AvatarThumbnail src={`/prompts/${character}/dataset/2.png`} 
        left="80px" top="40px"  transform="rotate(-4deg)" position="absolute" />
        <AvatarThumbnail src={`/prompts/${character}/dataset/3.png`} transform="rotate(-5deg)"/>
    </div>
  )
}

export default AvatarsPlaceholders