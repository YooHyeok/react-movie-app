import { useEffect, useState } from "react";

export default function CoinTracker() {

   /* Coin Tracker */
   const [loading, setLoading] = useState(true);
   const [coinInfo, setCoinInfo] = useState([]);
   // https://api.coinpaprika.com/v1/tickers
   useEffect(()=>{
     fetch("https://api.coinpaprika.com/v1/tickers")
     .then(response => response.json())
     .then((data)=>{
       console.log(data)
       setCoinInfo(data)
       setLoading(false)
     })
     .catch(console.log)
 
   }, [])

  return (
    <div>
      <h1>Coin Tracker {loading ? "" : `(${coinInfo?.length})`}</h1>
      {loading ? 
      <strong>Loading...</strong> 
      : 
      <select>
        {coinInfo?.map(item=><option key={item.id}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</option>)}
      </select>
      }
    </div>
  )
}