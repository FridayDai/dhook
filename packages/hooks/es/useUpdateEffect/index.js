import { useEffect, useRef } from 'react';

var useUpdateEffect = function useUpdateEffect(fn, dep) {
  var ref = useRef(false);
  useEffect(function () {
    if (!ref.current) {
      ref.current = true;
    } else {
      fn();
    }
  }, dep);
};

export default useUpdateEffect;