<script>
  import ImageContainer from "./ImageContainer.svelte";

  import "contain-css-svelte/themes/dark.css";
  import "contain-css-svelte/vars/defaults.css";

  import { Page, Bar } from "contain-css-svelte";
</script>

<ImageContainer></ImageContainer>
<footer>
  <Bar
    slot="footer"
    --bar-margin-bottom="0"
    --bar-height="24px"
    --bar-justify="right"
  >
    <span
      >Created by <a href="https://www.tomhinkle.net" target="_blank"
        >Tom Hinkle</a
      >
      for Harvard Forest</span
    >
  </Bar>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: small;
  }
</style>
