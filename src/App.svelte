<script>
  import ImageContainer from "./ImageContainer.svelte";

  import "contain-css-svelte/themes/dark.css";
  import "contain-css-svelte/vars/defaults.css";

  import { Page, Bar } from "contain-css-svelte";
</script>

<main style:--bar-border-color="var(--primary-bg)">
  <ImageContainer></ImageContainer>
  <footer>
    <Bar
      slot="footer"
      --bar-margin-bottom="0"
      --bar-height="24px"
      --bar-link-fg="white"
    >
      <span class="">
        <a
          href="https://github.com/thinkle/tree-core-visualization"
          target="_blank">Source Code</a
        >
      </span>
      <span
        >Created by <a href="https://www.tomhinkle.net" target="_blank"
          >Tom Hinkle</a
        >
        for
        <a href="https://harvardforest.fas.harvard.edu/"> Harvard Forest </a>
      </span>
    </Bar>
  </footer>
</main>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: small;
  }
  main {
    --primary-bg: #9b0e20;
    --primary-fg: white;
  }
  main :global(a) {
    text-decoration-color: var(--primary-bg);
  }
</style>
