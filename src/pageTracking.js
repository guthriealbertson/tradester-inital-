import { useEffect } from 'react';
import ReactGa from 'react-ga';

export default function pageTracking() {
  return useEffect(() => {
    ReactGa.initialize('G-CZNCS0TKD1'); // Get the id tracking in google analytics and pass in the parameter . EX : G-PGSTGT338H
    ReactGa.pageview(window.location.pathname + window.location.search); // Get page tracking by window Object
  }, []);
}
