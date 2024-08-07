<script lang="ts">
  import { Bar, Select } from "contain-css-svelte";
  import ImageViewer from "./ImageViewer.svelte";
  import { images } from "./images.js";

  let currentImage = 0;
  let image = images[currentImage];
</script>

<header>
  <Bar --bar-margin-bottom="0" --bar-border-bottom="none">
    <h1>Storm Stories</h1>
    <Select bind:value={currentImage}>
      {#each images as img, i (img)}
        <option value={i}>{img.title}</option>
      {/each}
    </Select>
  </Bar>
  <Bar>
    <span class="info">
      <h3>{image.title}</h3>
      <span class="attr">{image.attribution}</span>
    </span>
    <span class="desc">
      {image.desc}
    </span>
  </Bar>
</header>
<ImageViewer {image} />

<style>
</style>
