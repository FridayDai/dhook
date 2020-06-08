import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export type portalProps = {
  children: ReactNode
}
// 默认挂载在document.body上
const Portal = (props: portalProps) => {
  const {
    children
  } = props;

  return children ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;
