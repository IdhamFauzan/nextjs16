import { prisma } from '@/db'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql', // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [tanstackStartCookies()],
  trustedOrigins: [
    "http://localhost:3000",
    "https://3000-firebase-tanstackstart-learn-1768807531958.cluster-nulpgqge5rgw6rwqiydysl6ocy.cloudworkstations.dev"
  ],
})