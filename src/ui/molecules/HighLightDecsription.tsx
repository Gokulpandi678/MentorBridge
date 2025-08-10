import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { Description } from '../atoms/Description'

export const HighLightDecsription = () => {
  return (
    <div className='w-50 d-flex flex-column gap-4'>
        <SectionTitle title='Why choose Digitalbank?'/>
        <Description content='We leverage open Banking to turn your bank account into your financial hub. Control your finances like never before'/>
    </div>
  )
}
