const Fuse = require("fuse.js");

const data = [
  {
    title: "Cancer",
  },
];

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // ignoreDiacritics: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.5,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["title"],
};

const fuse = new Fuse(data, fuseOptions);

// Change the pattern
const searchPattern = "as";

console.log(fuse.search(searchPattern));
