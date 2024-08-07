<script>
  import ImageContainer from "./ImageContainer.svelte";

  import "contain-css-svelte/themes/dark.css";
  import "contain-css-svelte/vars/defaults.css";

  import { Page, Bar, Base } from "contain-css-svelte";
</script>

<Page>
  <Bar slot="header" --bar-justify="center">Tree Core Images</Bar>
  <ImageContainer></ImageContainer>
  <Bar slot="footer" --bar-margin-bottom="0">
    <span
      >Created by <a href="https://www.tomhinkle.net" target="_blank"
        >Tom Hinkle</a
      >
      for Harvard Forest</span
    >
  </Bar>
</Page>

<style>
</style>
