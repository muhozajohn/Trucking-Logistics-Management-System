import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from 'fs';
import path from 'path';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // Use JWT session strategy
  session: {
    strategy: 'jwt',
  },
  // Add secret for JWT encryption
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Add authorization parameters
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const dbPath = path.join(process.cwd(), 'src/data/db.json');
          const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
          
          const user = dbData.users?.find(u => 
            u.email === credentials.email && 
            u.password === credentials.password
          );
          
          if (user) {
            return {
              id: user.username,
              name: user.username,
              email: user.email
            };
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    }),
  ],
  callbacks: {
    // Enhanced JWT callback to persist user info
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    
    // Enhanced session callback
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.provider = token.provider;
      return session;
    },
    
    // Signin callback
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          const dbPath = path.join(process.cwd(), 'src/data/db.json');
          const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
          
          const existingUser = dbData.users?.find(u => u.email === profile.email);
          
          if (!existingUser) {
            if (!dbData.users) dbData.users = [];
            dbData.users.push({
              username: profile.name,
              email: profile.email,
            });
            
            fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
            console.log("New User Created Successfully");
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
    
    // Redirect callback
    async redirect({ url, baseUrl }) {
      // Always redirect to dashboard after login
      return `${baseUrl}/dashboard`;
    }
  },
  
  // Custom pages configuration
  pages: {
    signIn: '/login',
  },
});