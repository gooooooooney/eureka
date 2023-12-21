"use client"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
// import { signIn } from "@/next-auth"
import { signIn } from "next-auth/react"
import { Github } from "lucide-react"

export const SignIn = () => {
  return (
   <>
    <div onClick={() => {
      signIn("google")
    }}
     className="p-4 bg-muted rounded-xl">
      <Button>
        <FcGoogle className="h-4 w-4 mr-2" />
        Sign in with Google
      </Button>
    </div>
    <div onClick={() => {
      signIn("github")
    }}
     className="p-4 bg-muted rounded-xl">
      <Button>
        <Github className="h-4 w-4 mr-2" />
        Sign in with Google
      </Button>
    </div>
   </>
  )
}