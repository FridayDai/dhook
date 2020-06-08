"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useUpdateEffect = function useUpdateEffect(fn, dep) {
  var ref = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!ref.current) {
      ref.current = true;
    } else {
      fn();
    }
  }, dep);
};

var _default = useUpdateEffect;
exports.default = _default;