import "./Features.css"
import { ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, EyeIcon, FingerPrintIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Watch Currencies',
    description:
      'Watch and explore all the cryptocurrencies and coins listed in the market.',
    icon: EyeIcon,
  },
  {
    name: 'Market Cap',
    description:
      'Analyze the larger crypto market and the market cap of specific currencies.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Prices',
    description:
      'Track real-time crypto prices and 24-hour changes in the market.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Price Graph',
    description:
      'Tap on any currency to watch and analyze price fluctuations using charts and details.',
    icon: ChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className=" bg-gray-900 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Amazing Features for Crypto Lovers!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            If you love cryptocurrencies or are intrigued by the crypto market, these features are just for you!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative pl-16 group transition-all ease-in-out duration-1000 ${
                  index % 2 === 0
                    ? 'animate__animated animate__fadeInLeft' // Slide in from left for even index
                    : 'animate__animated animate__fadeInRight' // Slide in from right for odd index
                }`}
              >
                <dt className="text-xl font-semibold leading-7 text-gray-300 group-hover:text-white transition duration-300">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 group-hover:bg-zinc-700 transition duration-300">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 group-hover:text-gray-200 transition duration-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
// import { ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
// import { ArrowPathIcon, CloudArrowUpIcon, EyeIcon, FingerPrintIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/outline'

// const features = [
//   {
//     name: 'Watch Currencies',
//     description:
//       'Watch and Explore all the crypto currencies and coin listed in the market .',
//     icon: EyeIcon, 
//   },
//   {
//     name: 'Market cap',
//     description:
//       'Take on the larger crypto market and the perticular currency market cap ',
//     icon: GlobeAltIcon,
//   },
//   {
//     name: 'Prices',
//     description:
//       'Track the crypto prices with real time market data and the 24 hours change in the prices.',
//     icon: CurrencyDollarIcon,
//   },
//   {
//     name: 'Price Graph',
//     description:
//       'On a tap on any currency Watch and analyse their  price up down by the help of charts and their details',
//     icon: ChartBarIcon,
//   },
// ]

// export default function Example() {
//   return (
//     <div className="bg-transparent py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
         
//           <p className=" text-3xl font-bold tracking-tight text-white sm:text-4xl">
//            Here is some amazing features for YOU!
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//            if you are an crypto currency lover or interested about the crypto currency market than Yes! it is for you
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative pl-16">
//                 <dt className=" text-1xl text-base font-semibold leading-7 text-gray-300">
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900">
//                     <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }
