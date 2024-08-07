<script lang="ts">
  import { Bar, Select } from "contain-css-svelte";
  import ImageViewer from "./ImageViewer.svelte";
  import { images } from "./images.js";

  let image = images[0];
</script>

<header>
  <Bar --bar-margin-bottom="0" --bar-border-bottom="none">
    <h1>Storm Stories</h1>
    <Select bind:value={image}>
      {#each images as img, i (img)}
        <option value={img}>{img.title}</option>
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
{#key image}
  <ImageViewer {image} />
{/key}

<style>
</style>
