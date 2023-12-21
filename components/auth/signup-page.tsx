import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { signOut } from "@/next-auth"

export const SignUp = () => {
  return (
    <form
    action={async () => {
      "use server"
      await signOut()
    }}
     className="p-4 bg-muted rounded-xl">
      <Button>
        <FcGoogle className="h-4 w-4 mr-2" />
        Sign up with Google
      </Button>
    </form>
  )
}