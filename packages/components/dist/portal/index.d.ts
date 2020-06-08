import React, { ReactNode } from 'react';
export declare type portalProps = {
    children: ReactNode;
};
declare const Portal: (props: portalProps) => React.ReactPortal | null;
export default Portal;
