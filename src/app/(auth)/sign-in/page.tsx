'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button className="bg-green-500 py-1 px-2 text-sm shadow m-2 rounded-sm font-medium hover:bg-green-400" onClick={() => signIn()}>Sign in</button>
        </>
    )
}