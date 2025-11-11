import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"

const authOptions = {
  providers: [
    FacebookProvider({
      clientId: "1113346303956356",
      clientSecret: "c969cfa2e3318fa368f899df40954c55",
    }),
    InstagramProvider({
      clientId: "23938232769173184",
      clientSecret: "244800dc15242cb885894308049797fd",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
export { authOptions }
