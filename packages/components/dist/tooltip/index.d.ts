import { ReactElement, ReactNode } from 'react';
export declare type TooltipProps = {
    arrow: boolean;
    children: ReactElement;
    prefixCls: string;
    placement: 'bottom' | 'top' | 'left' | 'right';
    title: string | ReactNode;
};
declare const Tooltip: (props: TooltipProps) => JSX.Element;
export default Tooltip;
