import React from 'react'
import Image from 'next/image'

type Props = {}

const PlusIcon = (props: Props) => {
  return (
    <div>
        <Image src={'./assets/images/plus-icon.svg'} alt={''} className='size-14' height={56} width={56} />
    </div>
  )
}

export default PlusIcon