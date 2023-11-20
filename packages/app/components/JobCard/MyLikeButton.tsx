import React, { useState } from 'react'
import { Heart } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'

const MyLikeButton = () => {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked) 
  }

  return (
    <Button
      backgroundColor={'transparent'}
      size={50}
      onPress={toggleLike}
      icon={<Heart color={liked ? '#EB7002' : 'darkgrey'} />}
    ></Button>
  )
}

export default MyLikeButton
