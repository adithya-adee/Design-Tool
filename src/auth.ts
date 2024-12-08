import Google from "@auth/sveltekit/providers/google";
import { env } from "$env/dynamic/private";
import { SvelteKitAuth } from "@auth/sveltekit";
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      
    }),
  ],
  secret: env.AUTH_SECRET,
  trustHost: true,
});
