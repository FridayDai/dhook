import React, { CSSProperties, ReactElement } from 'react';
import Portal from '../portal/index';

const inlineStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1300,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
};

const backdropStyle: CSSProperties = {
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
};

const hidden: CSSProperties = {
  visibility: 'hidden'
};

export type ModalProps = {
  children: ReactElement,
  hideBackdrop: boolean, // 背景遮罩
  visible: boolean,
  onCancel: () => void
};

const Modal = (props: ModalProps) => {
  const {
    children,
    visible = false,
    hideBackdrop = false,
    onCancel,
    ...other
  } = props;

  const handleCancel = () => {
    if(onCancel) {
      onCancel();
    }
  };

  return (
    <Portal>
      <div
        style={{
          ...inlineStyle,
          ...(!visible ? hidden : {})
        }}
      >
        {
          hideBackdrop ? null : (
            <div onClick={handleCancel} style={{ ...backdropStyle, ...(!visible ? hidden : {}) }}  />
          )
        }
        {React.cloneElement(children)}
      </div>
    </Portal>
  );
};

export default Modal;
