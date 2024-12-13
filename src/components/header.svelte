<script lang="ts">
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { onMount } from "svelte"

  onMount(() => {
    if ($page.data.session) {
      window.location.href = "/protected"
    }
  })

  const handleRedirect = () => {
    if ($page.data.session) {
      window.location.href = "/protected"
    }
  }
</script>

<header
  class="flex justify-between items-center px-6 py-4 bg-black text-white w-full"
>
  <h1 class="text-2xl font-bold">DesignTool</h1>
  {#if $page.data.session}
    <SignOut>
      <button
        slot="submitButton"
        class="px-4 py-2 bg-white text-black font-semibold rounded-md border border-black hover:bg-gray-700 hover:text-white transition"
      >
        Sign Out
      </button>
    </SignOut>
  {:else}
    <SignIn>
      <button
        slot="submitButton"
        class="px-4 py-2 bg-white text-black font-semibold rounded-md border border-black hover:bg-gray-700 hover:text-white transition"
      >
        Sign In
      </button>
    </SignIn>
  {/if}
</header>

<main
  class="flex flex-col justify-center items-center h-screen bg-gray-50 text-center w-full"
>
  <h2 class="text-xl font-semibold mb-6">
    To get started with DesignTool, please Sign In
  </h2>
  {#if $page.data.session}
    <button
      on:click={handleRedirect}
      class="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
    >
      Get Started
    </button>
  {:else}
    <SignIn>
      <button
        slot="submitButton"
        class="px-6 py-3 bg-gray-100 text-black font-semibold rounded-md hover:bg-gray-800 hover:text-white transition shadow-md"
      >
        Sign In
      </button>
    </SignIn>
  {/if}
</main>
