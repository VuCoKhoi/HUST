import useMediaQuery from '@material-ui/core/useMediaQuery';

function useDevice() {
  const matchMobile = useMediaQuery('(max-width:786px)');
  const matchDesktop = useMediaQuery('(min-width:786px)');
  return { matchMobile, matchDesktop };
}

export default useDevice;
