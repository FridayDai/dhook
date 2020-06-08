function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Portal from '../portal/index';
var inlineStyle = {
  position: 'fixed',
  zIndex: 1300,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
};
var backdropStyle = {
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
};
var hidden = {
  visibility: 'hidden'
};

var Modal = function Modal(props) {
  var children = props.children,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      onCancel = props.onCancel,
      other = _objectWithoutProperties(props, ["children", "visible", "hideBackdrop", "onCancel"]);

  var handleCancel = function handleCancel() {
    if (onCancel) {
      onCancel();
    }
  };

  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, inlineStyle), !visible ? hidden : {})
  }, hideBackdrop ? null : /*#__PURE__*/React.createElement("div", {
    onClick: handleCancel,
    style: _objectSpread(_objectSpread({}, backdropStyle), !visible ? hidden : {})
  }), React.cloneElement(children)));
};

export default Modal;