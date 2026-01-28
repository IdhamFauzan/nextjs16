import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://3000-firebase-tanstackstart-learn-1768807531958.cluster-nulpgqge5rgw6rwqiydysl6ocy.cloudworkstations.dev"
})