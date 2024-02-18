import InvitationCard from '@/app/Components/Cards/InvitationCard'
import PremiumCard from '@/app/Components/Cards/PremiumCard'
import React from 'react'

const MyNetwork = () => {
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <InvitationCard />
        <PremiumCard />
      </div>
    </div>
  )
}

export default MyNetwork