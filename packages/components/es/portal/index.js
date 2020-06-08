import ReactDOM from 'react-dom';

// 默认挂载在document.body上
var Portal = function Portal(props) {
  var children = props.children;
  return children ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;