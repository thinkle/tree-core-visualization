<script>
  import OpenSeadragon from "openseadragon";
  import "./types.js";
  import { onMount } from "svelte";
  import { Bar } from "contain-css-svelte";

  /* @type {Image} */
  export let image;
  let viewerElement;

  onMount(() => {
    const viewer = OpenSeadragon({
      element: viewerElement,
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: image.tiles,
      showNavigator: true,
      navigatorPosition: "TOP_CENTER",
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomImageRatio: 0.5,
      visibilityRatio: 1,
      zoomPerScroll: 2,
      /* panVertical: false, */
      navigatorHeight: 36,
      navigatorWidth: window.innerWidth - 64 /* padding */ - 140 /* buttons */,
    });
  });
</script>

<div>
  <Bar>
    <span class="info">
      <h3>{image.title}</h3>
      <span class="attr">{image.attribution}</span>
    </span>
    <span class="desc">
      {image.desc}
    </span>
  </Bar>
  <div bind:this={viewerElement}></div>
</div>

<style>
  @import url("https://unpkg.com/@recogito/annotorious@2.6.2/dist/annotorious.min.css");

  div {
    margin: 0 auto;
    width: 100%;
    height: 80vh;
  }
  .attr {
    font-size: small;
    font-style: italic;
  }
</style>
