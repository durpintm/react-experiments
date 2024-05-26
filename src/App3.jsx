import { useEffect, useState, memo, useCallback } from "react";

const App2 = () => {
  const [exchage1Data, setExchage1Data] = useState({});
  const [exchage2Data, setExchage2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operations to get the data
    setExchage1Data({ returns: 100 });
  }, []);

  useEffect(() => {
    // Some operations to get the data
    setExchage2Data({ returns: 100 });
  }, []);

  useEffect(() => {
    // Some operations to get the data
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);
  }, []);

  // useCallback is not about minimizing the amount of code that is run
  // useCallback is about not rendering a child component, if the function has not/ does not need to change across renders
  const calculateReturns = useCallback(() => {
    return exchage1Data.returns + exchage2Data.returns;
  }, [exchage1Data, exchage2Data]);

  // const incomeTax = (calculateReturns() + bankData.income) * 0.3;

  return (
    <div>
      <CryptoGainCalculator calculateReturns={calculateReturns} />
      {/* <Dummy /> */}
    </div>
  );
};

// const Dummy = () => {
//   return <div>Hi</div>;
// };

// eslint-disable-next-line react/prop-types, react/display-name
const CryptoGainCalculator = memo(function ({ calculateReturns }) {
  console.log("CryptoChild Re-render");

  return <div>Your crypto returns are {calculateReturns()}</div>;
});

export default App2;
