import { cookies } from "next/headers";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export async function auth() {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
        ? (token.accessToken as string)
        : "";
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/api/authenticate-backend`;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/",
  },
};
