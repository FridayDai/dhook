import React, { ReactElement, ReactNode } from 'react';

export type TooltipProps = {
  arrow: boolean,
  children: ReactElement,
  prefixCls: string,
  placement: 'bottom' | 'top' | 'left' | 'right',
  title: string | ReactNode
}

const Tooltip = (props: TooltipProps) => {
  const {
    arrow = false,
    children,
    prefixCls = 'dcomponent-tooltip',
    placement = 'bottom',
    title,
    ...other
  } = props;




  return (
    <React.Fragment>
      {React.cloneElement(children)}
    </React.Fragment>
  );
};

export default Tooltip;
