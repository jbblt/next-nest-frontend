import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchBackendLoginUser } from "@/lib/auth/fetchBackendLoginUser";

export async function auth() {
  const session = await getServerSession(authOptions);
  return session?.accessToken || null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/login-user-password`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );

        if (!res.ok) throw new Error("Invalid credentials");

        const data = await res.json();

        return {
          id: data.userId,
          email: data.email,
          accessToken: data.backendJWT,
          name: data.name,
          image: data.image,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        return token;
      }

      if (account?.provider === "google" && token.email) {
        token.accessToken = await fetchBackendLoginUser(token.email);
      }

      return token;
    },

    async session({ session, token }) {
      session["accessToken"] = (token.accessToken as string) || "";
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
    newUser: "/",
  },
};
