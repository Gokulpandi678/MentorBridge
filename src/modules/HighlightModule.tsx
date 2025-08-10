import React from 'react'
import { HighLightDecsription } from '../ui/molecules/HighLightDecsription'
import { HighlightCards } from '../ui/organisms/HighlightCards'

export const HighlightModule = () => {
  return (
    <div className='bg-gray-400 d-flex gap-4 flex-column p-10'>
        <HighLightDecsription />
        <HighlightCards />
    </div>
  )
}
