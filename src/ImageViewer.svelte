<script>
  import OpenSeadragon from "openseadragon";
  import "./types.js";
  import { onMount } from "svelte";

  /* @type {Image} */
  export let image;
  let viewerElement;

  onMount(() => {
    const viewer = OpenSeadragon({
      element: viewerElement,
      //prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
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
      navigatorDisplayRegionColor: "rgba(255, 255, 125, 0.9)",
      /* panVertical: false, */
      navigatorHeight: 36,
      navigatorWidth: window.innerWidth - 64 /* padding */ - 140 /* buttons */,
    });
  });
</script>

<div class="viewer-container" bind:this={viewerElement}></div>

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
  .viewer-container :global(div[title="Zoom in"] img),
  .viewer-container :global(div[title="Zoom out"] img),
  .viewer-container :global(div[title="Go home"] img),
  .viewer-container :global(div[title="Toggle full page"] img) {
    display: none;
    visibility: hidden;
  }
  .viewer-container :global(div[title="Zoom in"]::before),
  .viewer-container :global(div[title="Zoom out"]::before),
  .viewer-container :global(div[title="Go home"]::before),
  .viewer-container :global(div[title="Toggle full page"]::before) {
    width: 32px;
    height: 32px;
    font-size: 16px;
    line-height: 16px;
    box-sizing: border-box;
    vertical-align: center;
    margin-right: 8px;
    display: grid;
    place-content: center;

    border-radius: 50%;
    border: 1px solid #ccc;
    color: #ccc;
    background-color: #222a;
    transition:
      color,
      border 300ms;
  }
  .viewer-container :global(div[title="Zoom in"]:hover::before),
  .viewer-container :global(div[title="Zoom out"]:hover::before),
  .viewer-container :global(div[title="Go home"]:hover::before),
  .viewer-container :global(div[title="Toggle full page"]:hover::before) {
    border: 1px solid white;
    color: white;
    background-color: black;
  }

  .viewer-container :global(div[title="Zoom in"]::before) {
    content: "+";
  }
  .viewer-container :global(div[title="Zoom out"]::before) {
    content: "-";
  }
  .viewer-container :global(div[title="Go home"]::before) {
    content: "⌖";
    line-height: 8px;
  }
  .viewer-container :global(div[title="Toggle full page"]::before) {
    content: "⛶";
  }
</style>
