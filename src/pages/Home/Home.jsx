import React, { useContext, useEffect, useState } from 'react'
import "./Home.css";
import { CoinContext } from '../../context/CoinContext';
import { Link } from "react-router-dom";

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    const [input, setInput] = useState('');

    const inputHandler = (event)=>{
         setInput(event.target.value);
         if(event.target.value === "")
          {
            setDisplayCoin(allCoin);
          }
    }

    const searchHandler = async (event)=>{
      event.preventDefault(); // prevent the reloding of   page when we search some thing 
      const coin = await allCoin.filter((item) =>{
        return item.name.toLowerCase().includes(input.toLowerCase()) //this will filter the data according to the text entered in input box

      })
      setDisplayCoin(coin);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    }, [allCoin])

  return (
    <div className='home bg-gray-900 min-h-screen p-1 sm:py-6'>
     <div className="hero ">
     <p className=" text-3xl font-bold tracking-tight text-white sm:text-5xl">
    Welcome to <br /> <strong className='px-2' style={{backgroundColor: 'white', color: '#5f06ee', borderRadius: '8px',  }}> The Coin Live! </strong> 
    </p>
        <p className='text-ml'> Your Gateway to Real-Time Crypto Insights! </p>
        <form onSubmit={searchHandler}>
        <input className='text-zinc-600' onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='Search here for crypto' required/>

         <datalist id='coinlist'>
             {allCoin.map((item,index) => (<option key={index} value={item.name}/>))}
         </datalist>

        <button type='submit' >Search</button>
        </form>
     </div>
      <div className="crypto-table bg-zinc-900">
        <div className="table-layout " >
          <p>#</p>
          <p>Coins</p>
          <p className='current-price'  >Price</p>
          <p className="change"style={{textAlign:"center"}}>24H change</p>
          <p className='market-cap'>Market cap</p>
        </div>
        {
            displayCoin.slice(0,10).map((item,index)=>(
             <Link title="Tap to see Graph & Details" to={`/coin/${item.id}`} className="table-layout " key={index}>
               <p>{item.market_cap_rank}</p>
               <div>
                 <img src={item.image} alt="" />
                 <p>{item.name + " - " + item.symbol}</p>
               </div>
               <p className='current-price' >{currency.symbol} {item.current_price}</p>
               <p className={item.price_change_percentage_24h>0?"green":"red"} >{item.price_change_percentage_24h}</p>
               <p className='market-cap'>{currency.symbol}  {item.market_cap}</p>
             </Link>   
            ))
        }
      </div>
    </div>
  )
}

export default Home;
