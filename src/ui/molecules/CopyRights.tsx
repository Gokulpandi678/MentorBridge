import React from 'react'
import { Button } from '../atoms/Button'
import { Description } from '../atoms/Description'

export const CopyRights = () => {
  return (
    <div className='d-flex flex-column align-items-end gap-3'>
        <Button buttonText='Request Invite'/>
        <Description content='&copy;Digitalbank. All Rights Reserved'/>
    </div>
  )
}
