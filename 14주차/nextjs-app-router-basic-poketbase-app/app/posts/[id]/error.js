'use client';
import React, { useEffect } from 'react'

const ErrorPostDetailPage = ({ error, reset }) => {

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <div>
            <p>Something went wrong!</p>
            <button onClick={() => reset()}>Reset Error Boundary</button>
        </div>
    )
}

export default ErrorPostDetailPage