import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

// prevent pages from starting in the middle when switching pages
function Scroll() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname])
    return null;
}

export default Scroll;