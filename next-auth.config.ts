import {NextAuthConfig} from "next-auth"
import Google from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

    })
  ]
} satisfies NextAuthConfig