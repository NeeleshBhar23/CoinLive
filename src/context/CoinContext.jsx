import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-nNFrotZonSY9pYin5mPjjG5H' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
      .then(response => response.json())
      .then(response => setAllCoin(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  console.log('CoinContextProvider currency:', currency);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
}

export default CoinContextProvider;
