import PostCard from '@/app/Components/Cards/PostCard'
import StartPostCard from '@/app/Components/Cards/StartPost'
import ToggleButton from '@/app/Components/ToggleButton'
import React from 'react'

const Feeds = () => {
    return (
        <div>
            <StartPostCard />
            <hr className='border-1 my-3 border-gray-300'/>
            <div className='flex flex-col'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default Feeds