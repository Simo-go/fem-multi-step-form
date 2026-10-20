import { useEffect } from "react";

export default function useScrollToTop() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
}
