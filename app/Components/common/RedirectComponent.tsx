'use client'

import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const RedirectComponent = () => {
    const router = useRouter()
    
    
    useEffect(() => {
        window.location.href = '/feed';
        // router.push('/uas/login?fromSignIn=true&trk=cold_join_sign_in')
    }, [])
    


    return (
        <div></div>
    )
}

export default RedirectComponent