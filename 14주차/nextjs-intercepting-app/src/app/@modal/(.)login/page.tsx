'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

// parallel route     
// intercepting route 

const ModalLogin = () => {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, [])

    return (
        <dialog
            ref={dialogRef}
            onClick={() => router.back()}
            className='border p-2 rounded backdrop:bg-slate-500/30'
        >

            {/* <img loading='' srcset width height  />
        blur 
            <Image /> */}

            <button
                onClick={() => dialogRef.current?.close()}
            >
                X
            </button>

            <h1>Modal Login Page</h1>
        </dialog>
    )
}

export default ModalLogin