const manifest = require("../build/asset-manifest.json");

(function() {
  console.log(manifest);
  if (!manifest["main.js"] || !manifest["index.html"]) {
    throw new Error("Manifest file format is not correct.");
  }
})();
