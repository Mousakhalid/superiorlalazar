import { Button } from '@/components/ui/button'
import React from 'react'

const Introduction = () => {
    return (
        <div className='md:px-72 px-8 py-24 bg-gray-100'>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
                <div className='space-y-4'>
                    <h2 className='text-[#0C7E81] text-5xl font-semibold'>Introduction</h2>
                    <p className='text-gray-700 text-[13px]'>
                        DAE Electronics is the first step towards a promising career in electronics. We provide advanced labs, modern facilities, and experienced instructors to lay a solid foundation for future electronics engineers.
                    </p>
                </div>
                <div>
                    <Button className='bg-yellow-500 text-gray-700 hover:bg-yellow-700'>Enroll Here !</Button>
                </div>
            </div>
        </div>
    )
}

export default Introduction