import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryMatcher = window.matchMedia(query);

    setMatches(mediaQueryMatcher.matches);

    function listener(e) {
      setMatches(e.matches);
    }
    // Although addListener is deprecated, it works in all modern browsers,
    // unlike addEventListener which is not working properly on iOS Safari
    mediaQueryMatcher.addListener(listener);

    return () => {
      mediaQueryMatcher.removeListener(listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
