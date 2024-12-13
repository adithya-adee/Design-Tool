<script lang="ts">
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
</script>

{#if $page.data.session}
  <span class="signedInText">
    {$page.data.session.user?.email ?? $page.data.session.user?.name}
  </span>
  <SignOut>
    <div slot="submitButton" class="buttonPrimary">Sign out</div>
  </SignOut>
{:else}
  <span class="notSignedInText">You are not signed in</span>
  <SignIn>
    <div slot="submitButton" class="buttonPrimary">Sign in</div>
  </SignIn>
{/if}
