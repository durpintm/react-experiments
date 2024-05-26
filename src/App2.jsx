import { useMemo } from "react";
import { useEffect, useState } from "react";

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

  // Expensive operation
  const cryptoReturns = useMemo(() => {
    console.log("Before calc");

    return exchage1Data.returns + exchage2Data.returns;
  }, [exchage1Data, exchage2Data]);

  // console.log("Before calc");
  // const cryptoReturns = exchage1Data.returns + exchage2Data.returns;
  // console.log("After calc");

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>Hi there, your income tax returns are {incomeTax}</div>;
};

export default App2;
