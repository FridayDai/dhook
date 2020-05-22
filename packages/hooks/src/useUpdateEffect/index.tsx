import React, { DependencyList, useEffect, useRef } from 'react';

const useUpdateEffect = (fn: () => any, dep: DependencyList) => {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      fn();
    }
  }, dep);
};

export default useUpdateEffect;
