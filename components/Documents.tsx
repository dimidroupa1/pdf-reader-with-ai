import React from 'react'
import PlaceholderDocument from './PlaceholderDocument'

type Props = {}

const Documents = (props: Props) => {
  return (
    <div className='flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto'>
       {/* Map through the docs */}

       {/* Placeholder the docs */}
       <PlaceholderDocument />
    </div>
  )
}

export default Documents