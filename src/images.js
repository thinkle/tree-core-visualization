import "./types.js";

const treeTeachers =
  "by Danielle Mazur and Karen Murphy @ the Harvard Forest Tree Ring Lab";

/* @type {Image[]} */
const images = [
  {
    id: "core1",
    src: "images/core1.tif",
    title: "Core 1",
    desc: "Tree 46",
    thumbnail: "tiles/core1/core1_thumbnail.jpg",
    tiles: "tiles/core1/core1.dzi",
    attribution: treeTeachers,
  },
  {
    id: "core2",
    src: "images/core2.tif",
    title: "Core 2",
    desc: "Tree 42",
    thumbnail: "tiles/core2/core2_thumbnail.jpg",
    tiles: "tiles/core2/core2.dzi",
    attribution: treeTeachers,
  },
  {
    id: "core3",
    src: "images/core3.tif",
    title: "Core 3",
    desc: "Tree 43",
    thumbnail: "tiles/core3/core3_thumbnail.jpg",
    tiles: "tiles/core3/core3.dzi",
    attribution: treeTeachers,
  },
  {
    id: "core4",
    src: "images/core4.tif",
    title: "Core 4",
    desc: "Tree 50",
    thumbnail: "tiles/core4/core4_thumbnail.jpg",
    tiles: "tiles/core4/core4.dzi",
    attribution: treeTeachers,
  },
];

export { images };
