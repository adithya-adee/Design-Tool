<script lang="ts">
  import "../app.css"
</script>

<div class="flex">
  <slot />
</div>

<style>
  /* Global Styles for Body */
  :global(body) {
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    margin: 0;
    padding: 0;
    background: #fff;
    color: #333;
    min-height: 100dvh;
    width: 100%;
  }

  /* Typography and Spacing */
  :global(li),
  :global(p) {
    line-height: 1.5rem;
  }

  :global(a) {
    font-weight: 500;
  }

  :global(hr) {
    border: 1px solid #ddd;
  }

  :global(iframe) {
    background: #ccc;
    border: 1px solid #ccc;
    height: 10rem;
    width: 100%;
    border-radius: 0.5rem;
    filter: invert(1);
  }
</style>
