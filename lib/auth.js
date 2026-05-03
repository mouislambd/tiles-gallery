import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";


const db = {
    user: [],
    session: [],
    account: [],
    verification: [],
};



export const auth = betterAuth({
    database: memoryAdapter(db),
    emailAndPassword: {
        enabled: true,
    },
    secret: "tiles-gallery-secret-key-2025-very-long-secret",
    baseURL: process.env.BETTER_AUTH_URL || "https://tiles-v2.vercel.app",
});