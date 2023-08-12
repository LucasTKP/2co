'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

function page() {
  return (
    <div onClick={() => signOut({callbackUrl:"/"})}>page</div>
  )
}

export default page