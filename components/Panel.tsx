import React from 'react'

import { UserDashboardOptions } from "@/lib/constants";
import Link from "next/link";


const Panel = () => {
  return (
    <div className='h-full w-full'>
      
      
      <div className="w-full">
        
        {UserDashboardOptions.map((options, index) => (
          <Link 
            href={options.link}
            key={index}
            className="fc p-2 w-full hover:bg-red-600 
                hover:bg-opacity-60 rounded-lg text-red-600"
          >
            

            <p className="text-white font-semibold">{options.option}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Panel