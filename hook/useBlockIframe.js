import { useEffect } from 'react';

function useBlockIframe() {
  useEffect(() => {
    if (window.top !== window.self)
      window.top.location.replace(window.self.location.href);
  }, []);
}

export default useBlockIframe;
