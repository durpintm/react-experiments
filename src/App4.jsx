import { useEffect, useRef } from "react";

const App4 = () => {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // document.getElementById("incomeTaxContainer").innerHTML = 10;
      divRef.current.innerHTML = 200;
      console.log(divRef.current);
    }, 5000);
  }, []);

  const incomeTax = 200000;

  return (
    <div>
      Hi there, your income tax returns are
      {/* <div id="incomeTaxContainer">{incomeTax}</div> */}
      <div ref={divRef}>{incomeTax}</div>
    </div>
  );
};

export default App4;
