import React from 'react'
import './Purchase.css'
import image from "../../assets/crypto_images2.png";

const Purchase = () => {
  return (
    <div className='body'>
   
     
     <p className=' font-bold tracking-tight text-white sm:text-3xl flex justify-center mt-10'>Here are some best platform to Purchase and Trade Crypto Currencies in Your Country</p>
       <div className="india-box container mx-auto">
         <h2 className='font-bold tracking-tight text-white'>The best Platform to trade crytpto in India</h2>
         <ul >
         <button className='go-to-button text-zinc-900 '><a href="https://coinswitch.co/">CoinSwitch </a> </button> <p>Best for Beginners -:</p> 
         <button className='go-to-button text-zinc-900'> <a href="https://wazirx.com/">WazirX</a></button> <p>Best for Novite and Intermediate traders -:</p> 
         <button className='go-to-button text-zinc-900'> <a href="https://coindcx.com/">CoinDCX</a></button><p>Best for Advanced Traders-:</p> 
         <button className='go-to-button text-zinc-900'> <a href="https://zebpay.com/">Zebpay</a></button><p>Best for Intraday trading and Crypto landing -:</p> 
         <button className='go-to-button text-zinc-900'> <a href=" https://www.binance.com/en">Binance</a></button><p>Best Foreign Exchange -:</p>
         <button className='go-to-button text-zinc-900'> <a href="https://www.kraken.com/">Kraken</a></button><p>Best For low Fees -:</p> 
         <button className='go-to-button text-zinc-900'> <a href="https://www.bitget.com/">Bitget</a></button><p>Best for security and Safety For Users-:</p> 

         </ul>
       </div>
       
       <div className="us-box container mx-auto">
         <h2 className='font-bold tracking-tight text-white'>The best Platform to trade crytpto in US</h2>
         <ul>
         <a className='go-to-button text-zinc-900' href='https://coinbase-consumer.sjv.io/c/2104074/1841147/9251?subid1=5071855&subid2=nc39a0a2a1620441a9fee4996e093082009'>CoinBase</a> <p>Best for Beginners -:</p> 
         <a className='go-to-button text-zinc-900' href='https://www.kraken.com/'>Kraken</a><p>Best For low Fees and Experienced -:</p>
         <a className='go-to-button text-zinc-900' href='http://crypto.com/'>Crypto.com</a> <p>Best Mobile App-:</p> 
         <a className='go-to-button text-zinc-900' href='https://gemini.com'>Gemini</a><p>Best for security and Safety-:</p> 
         <a className='go-to-button text-zinc-900' href='https://www.bitmart.com/en-US'>BitMart</a><p>Best for AltCoins -:</p> 
         <a className='go-to-button text-zinc-900' href='https://cash.app/'>Cash App</a><p>Best for BitCoin -:</p> 
         <a className='go-to-button text-zinc-900' href='https://bisq.network/'>Bisq</a><p>Best Decentralized Exchange -:</p>
          
         
         </ul>
       </div>
      <div id='disclaimer' className=' text-white-800 rounded-md  container mx-auto p-10 '>
       <p className='mx-auto '><strong>Important : </strong>Investing in cryptocurrencies, Decentralized Finance (DeFi), and other Initial Coin Offering (ICOs) is highly risky and speculative, and the markets can be extremely volatile. Consult with a qualified professional before making anu financial decisions. This article is not the recommendation by Crypto Traker to invest in crypto Currencies it is just an optional suggetion for you.</p>
      </div>
    </div>
  )
}

export default Purchase
