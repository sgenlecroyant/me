import React, { useRef, useEffect } from "react";

// function useOutsideAlerter(ref) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           alert("You clicked outside of me!");
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }

//   export default useOutsideAlerter;
//   export default function OutsideAlerter(props) {
//     const wrapperRef = useRef(null);
//     useOutsideAlerter(wrapperRef);
  
//     return <div ref={wrapperRef}>{props.children}</div>;
//   }