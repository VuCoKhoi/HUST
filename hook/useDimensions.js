import { useState, useRef, useLayoutEffect } from 'react';

const useDimensions = () => {
  const ref = useRef();
  const clearRef = useRef();
  clearRef.current = true;
  const [dimensions, setDimensions] = useState({});
  useLayoutEffect(() => {
    clearRef.current = true;
    const measure = () => {
      if (clearRef.current) {
        window.requestAnimationFrame(() => {
          if (ref && ref.current) {
            setDimensions(ref.current.getBoundingClientRect().toJSON());
          } else {
            setDimensions(document.body.getBoundingClientRect().toJSON());
          }
        });
      }
    };
    measure();

    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure);

    return () => {
      clearRef.current = false;
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [ref.current]);
  return [ref, dimensions];
};

export default useDimensions;
