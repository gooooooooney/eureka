
"use client"

import {signOut} from "next-auth/react"
import { Button } from "@/components/ui/button"

export const UserButton = ({props}: any) => {

  
  return (
    <Button onClick={() => {
      signOut()
    }} size="sm">
      Logout
    </Button>
  )
}