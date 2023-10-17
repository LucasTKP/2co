import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({

  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!
    })

  ],
  callbacks: {
    async session({ session, token, }) {
      session.user.id = token.sub!
      session.user.token = token.access_token!.toString()
      return session
    },

    async jwt({ token, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
  }
})


export { handler as GET, handler as POST }
