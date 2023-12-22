"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
// import { signIn } from "@/next-auth"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

export const SignIn = () => {
  const [btnLoading, setBtnLoading] = useState("");
  return (
    <>
      <div
        onClick={() => {
          setBtnLoading("google");
          signIn("google");
        }}
        className="p-4 bg-muted rounded-xl"
      >
        <Button disabled={!!btnLoading}>
          <Loader
            className={cn("h-4 w-4 mr-2 animate-spin", {
              hidden: btnLoading !== "google",
            })}
          />
          <FcGoogle
            className={cn("h-4 w-4 mr-2", {
              hidden: btnLoading === "google",
            })}
          />
          Sign in with Google
        </Button>
      </div>
      <div
        onClick={() => {
          setBtnLoading("github");
          signIn("github");
        }}
        className="p-4 bg-muted rounded-xl"
      >
        <Button disabled={!!btnLoading}>
        <Loader
            className={cn("h-4 w-4 mr-2 animate-spin", {
              hidden: btnLoading !== "github",
            })}
          />
          <FaGithub
            className={cn("h-4 w-4 mr-2", {
              hidden: btnLoading === "github",
            })}
          />
          Sign in with Github
        </Button>
      </div>
    </>
  );
};
