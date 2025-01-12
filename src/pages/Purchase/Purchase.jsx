import React from 'react';

const Purchase = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        Best Platforms to Purchase and Trade <strong style={{ color: '#5f06ee' }}> Cryptocurrencies</strong> 
      </h1>

      {/* India Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Best Platforms in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://coinswitch.co/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              CoinSwitch
            </a>
            <p className="mt-2 text-sm">Best for Beginners</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://wazirx.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              WazirX
            </a>
            <p className="mt-2 text-sm">Best for Novice and Intermediate Traders</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://coindcx.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              CoinDCX
            </a>
            <p className="mt-2 text-sm">Best for Advanced Traders</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://zebpay.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Zebpay
            </a>
            <p className="mt-2 text-sm">Best for Intraday Trading and Crypto Lending</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://www.binance.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Binance
            </a>
            <p className="mt-2 text-sm">Best Foreign Exchange</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://www.kraken.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Kraken
            </a>
            <p className="mt-2 text-sm">Best for Low Fees</p>
          </div>
        </div>
      </div>

      {/* US Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Best Platforms in the US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://coinbase-consumer.sjv.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Coinbase
            </a>
            <p className="mt-2 text-sm">Best for Beginners</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://www.kraken.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Kraken
            </a>
            <p className="mt-2 text-sm">Best for Low Fees and Experienced Users</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="http://crypto.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Crypto.com
            </a>
            <p className="mt-2 text-sm">Best Mobile App</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://gemini.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Gemini
            </a>
            <p className="mt-2 text-sm">Best for Security and Safety</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://www.bitmart.com/en-US" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              BitMart
            </a>
            <p className="mt-2 text-sm">Best for AltCoins</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow">
            <a href="https://cash.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg font-bold">
              Cash App
            </a>
            <p className="mt-2 text-sm">Best for Bitcoin</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-600">
        <p>
          <strong>Disclaimer:</strong> Investing in cryptocurrencies, DeFi, and
          ICOs is highly risky and speculative. The markets can be volatile. Consult with a qualified
          professional before making financial decisions. This content is not a recommendation by
          Crypto Tracker to invest in cryptocurrencies; it’s purely informational.
        </p>
      </div>
    </div>
  );
};

export default Purchase;

// import React from 'react'
// import './Purchase.css'


// const Purchase = () => {
//   return (
//     <div className='body'>
   
     
//      <p className=' font-bold tracking-tight text-white sm:text-3xl flex justify-center mt-10'>Here are some best platform to Purchase and Trade Crypto Currencies in Your Country</p>
//        <div className="india-box container mx-auto bg-zinc-800">
//          <h2 className='font-bold tracking-tight text-white'>The best Platform to trade crytpto in India</h2>
//          <ul >
//          <button className='go-to-button text-zinc-900 '><a href="https://coinswitch.co/">CoinSwitch </a> </button> <p>Best for Beginners -:</p> 
//          <button className='go-to-button text-zinc-900'> <a href="https://wazirx.com/">WazirX</a></button> <p>Best for Novite and Intermediate traders -:</p> 
//          <button className='go-to-button text-zinc-900'> <a href="https://coindcx.com/">CoinDCX</a></button><p>Best for Advanced Traders-:</p> 
//          <button className='go-to-button text-zinc-900'> <a href="https://zebpay.com/">Zebpay</a></button><p>Best for Intraday trading and Crypto landing -:</p> 
//          <button className='go-to-button text-zinc-900'> <a href=" https://www.binance.com/en">Binance</a></button><p>Best Foreign Exchange -:</p>
//          <button className='go-to-button text-zinc-900'> <a href="https://www.kraken.com/">Kraken</a></button><p>Best For low Fees -:</p> 
//          <button className='go-to-button text-zinc-900'> <a href="https://www.bitget.com/">Bitget</a></button><p>Best for security and Safety For Users-:</p> 

//          </ul>
//        </div>
       
//        <div className="us-box container mx-auto">
//          <h2 className='font-bold tracking-tight text-white'>The best Platform to trade crytpto in US</h2>
//          <ul>
//          <a className='go-to-button text-zinc-900' href='https://coinbase-consumer.sjv.io/c/2104074/1841147/9251?subid1=5071855&subid2=nc39a0a2a1620441a9fee4996e093082009'>CoinBase</a> <p>Best for Beginners -:</p> 
//          <a className='go-to-button text-zinc-900' href='https://www.kraken.com/'>Kraken</a><p>Best For low Fees and Experienced -:</p>
//          <a className='go-to-button text-zinc-900' href='http://crypto.com/'>Crypto.com</a> <p>Best Mobile App-:</p> 
//          <a className='go-to-button text-zinc-900' href='https://gemini.com'>Gemini</a><p>Best for security and Safety-:</p> 
//          <a className='go-to-button text-zinc-900' href='https://www.bitmart.com/en-US'>BitMart</a><p>Best for AltCoins -:</p> 
//          <a className='go-to-button text-zinc-900' href='https://cash.app/'>Cash App</a><p>Best for BitCoin -:</p> 
//          <a className='go-to-button text-zinc-900' href='https://bisq.network/'>Bisq</a><p>Best Decentralized Exchange -:</p>
          
         
//          </ul>
//        </div>
//       <div id='disclaimer' className=' text-white-800 rounded-md  container mx-auto p-10 '>
//        <p className='mx-auto '><strong>Important : </strong>Investing in cryptocurrencies, Decentralized Finance (DeFi), and other Initial Coin Offering (ICOs) is highly risky and speculative, and the markets can be extremely volatile. Consult with a qualified professional before making anu financial decisions. This article is not the recommendation by Crypto Traker to invest in crypto Currencies it is just an optional suggetion for you.</p>
//       </div>
//     </div>
//   )
// }

// export default Purchase
