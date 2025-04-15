import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }

  interface User {
    id: string;
    email: string;
  }

  interface JWT {
    accessToken?: string;
  }
}
