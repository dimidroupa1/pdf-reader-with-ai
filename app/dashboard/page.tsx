import Documents from '@/components/Documents'
import React from 'react'

export const dynamic = "force-dynamic"

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <div className='h-full max-w-7xl mx-auto'>
        <h1 className='text-3xl p-5 bg-gray-100 font-extralight text-indigo-600'>My documents</h1>

        <Documents />
    </div>
  )
}

export default DashboardPage