'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _threeHexagon = require('three-hexagon');

var _threeHexagon2 = _interopRequireDefault(_threeHexagon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WittgensteinGeometry = function (_HexagonGeometry) {
  _inherits(WittgensteinGeometry, _HexagonGeometry);

  /**
    @constructor
    @param {Number} [radius]
    @param {Number} [depth]
    @param {Number} [fanDist]
    @param {Number} [hexFaces]
  */

  function WittgensteinGeometry() {
    var radius = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
    var fanDist = arguments.length <= 2 || arguments[2] === undefined ? 0.5 : arguments[2];
    var hexFaces = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

    _classCallCheck(this, WittgensteinGeometry);

    // create the triangles that "fan out" from the hexagon
    // zero address is the center vertex

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WittgensteinGeometry).call(this, radius, depth, hexFaces));

    for (var i = 1; i <= 6; i++) {

      var aPos = i - 2 < 1 ? 6 + (i - 2) : i - 2;
      var bPos = i;

      _this.vertices.push(_this.projectedVector(_this.vertices[aPos], _this.vertices[bPos], fanDist));

      _this.faces.push(new _three2.default.Face3(i, _this.vertices.length - 1, i === 6 ? 1 : i + 1));
    }

    return _this;
  }

  // given two vertices, create a new one at distance len from b in same direction


  _createClass(WittgensteinGeometry, [{
    key: 'projectedVector',
    value: function projectedVector(a, b, len) {

      var c = new _three2.default.Vector3();

      c.subVectors(b, a).multiplyScalar(1 + len / c.length()).add(a);

      return c;
    }
  }]);

  return WittgensteinGeometry;
}(_threeHexagon2.default);

exports.default = WittgensteinGeometry;