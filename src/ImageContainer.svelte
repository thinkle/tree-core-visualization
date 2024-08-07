<script lang="ts">
  import ImageViewer from "./ImageViewer.svelte";
  import { images } from "./images.js";
  let currentImage = 0;
  let theImage = images[currentImage];
</script>

<ImageViewer image={theImage} />

<style>
</style>
