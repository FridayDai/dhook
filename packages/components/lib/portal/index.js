"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 默认挂载在document.body上
var Portal = function Portal(props) {
  var children = props.children;
  return children ? _reactDom.default.createPortal(children, document.body) : null;
};

var _default = Portal;
exports.default = _default;