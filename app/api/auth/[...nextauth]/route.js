import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
