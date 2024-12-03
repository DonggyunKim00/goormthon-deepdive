import Link from 'next/link'
import React, { ReactNode } from 'react'

const BoardLayout = ({ children, boardList, comments }: {
    children: ReactNode,
    boardList: ReactNode,
    comments: ReactNode,
}) => {

    // localhost:3000/board => localhost:3000/board/settings

    return (
        <>
            <nav>
                <Link href={'/board'}>Board</Link>{" "}
                <Link href={'/board/settings'}>Settings</Link>
            </nav>
            {children}
            {boardList}
            {comments}
        </>
    )
}

export default BoardLayout



