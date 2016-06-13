'use strict'

import THREE from 'three'
import HexagonGeometry from 'three-hexagon'

export default class WittgensteinGeometry extends HexagonGeometry {

  /**
    @constructor
    @param {Number} [radius]
    @param {Number} [depth]
    @param {Number} [fanDist]
    @param {Number} [hexFaces]
  */
  constructor(radius = 1, depth = 1, fanDist = 0.5, hexFaces = false) {
    super(radius, depth, hexFaces)

    // create the triangles that "fan out" from the hexagon
    // zero address is the center vertex
    for (var i = 1; i <= 6; i++) {

      let aPos = (i - 2 < 1) ? (6 + (i - 2)) : i - 2
      let bPos = i

      this.vertices.push(this.projectedVector(this.vertices[aPos], this.vertices[bPos], fanDist))

      this.faces.push(new THREE.Face3(i, this.vertices.length - 1, (i === 6) ? 1 : i + 1))
    }

  }

  // given two vertices, create a new one at distance len from b in same direction
  projectedVector(a, b, len) {

    let c = new THREE.Vector3()

    c.subVectors( b, a ).multiplyScalar( 1 + ( len / c.length() ) ).add( a );

    return c
  }

}
