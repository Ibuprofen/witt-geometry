# witt-geometry

THREE.js geometry for the [Wittgenstein project](burningman.org/event/brc/2016-art-installations/#WittgensteinDaVinciRachmaninoffARecursiveWoodenDesign)


### Install & Usage

1. `package.json` dependency: `"three-hexagon": "git@github.com:Ibuprofen/three-hexagon.git"` or (not likely in npm) `npm install --save witt-geometry`
1. `import WittgensteinGeometry from 'witt-geometry'`
1. `let witt = new WittgensteinGeometry(<radius>, <depth>, <fanDistance>, <hexFaces>)`


### Development

1. Clone repo.
1. `npm install`
1. `npm run watch`

In another project:

1. Point to this repo in `package.json`, either with `npm link` or using the full path.
1. `npm install witt-geometry`
