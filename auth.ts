import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

// Default values for build time when env vars might not be available
const googleClientId = process.env.GOOGLE_CLIENT_ID || "dummy-client-id"
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "dummy-client-secret"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    })
  ],
  callbacks: {
    async session({ session }) {
      return session
    },
    async jwt({ token }) {
      return token
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-build",
  debug: process.env.NODE_ENV === 'development',
})