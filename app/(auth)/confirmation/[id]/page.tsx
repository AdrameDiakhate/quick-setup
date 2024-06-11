'use client';

import React, { useEffect, useState } from 'react'
import { useRouter , useParams} from 'next/navigation'

function EmailConfirmed() {

    const router = useRouter()
    const params = useParams().id
    const [confirmationToken, setConfirmationToken] = useState("");
    const [isUserConfirmed, setIsUserConfirmed] = useState(false);

    useEffect(() => {
        VerifyConfirmation()
    })

    const VerifyConfirmation = async () => {
        const user = await fetch("confirmation", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(user){
            setIsUserConfirmed(true)
        } else{
            setIsUserConfirmed(false)
        }
    }


    const goToLogin = () => {
        router.push('/login')
    }

  return (
    <div>
        {
            isUserConfirmed 
            ? 
            <div>
                <p> Bravo , vous venez de confirmer votre email </p> 
                <p> Vous pouvez maintenant vous connecter <a onClick={goToLogin}> Se connecter </a> </p>
            </div>
            : 
            <p> Erreur lors de la confirmation de votre email </p>
        }
    </div>
  )
}

export default EmailConfirmed