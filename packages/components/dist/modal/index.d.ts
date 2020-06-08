import { ReactElement } from 'react';
export declare type ModalProps = {
    children: ReactElement;
    hideBackdrop: boolean;
    visible: boolean;
    onCancel: () => void;
};
declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
