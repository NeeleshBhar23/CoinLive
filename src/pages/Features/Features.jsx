
import "./Features.css"
import Pic1 from "/src/assets/Pic1.jpg"
import Pic2 from "/src/assets/Pic2.jpg"

import {
  EyeIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Watch Currencies",
    description:
      "Explore and monitor all cryptocurrencies and coins listed in the market, keeping track of their trends.",
    icon: EyeIcon,
  },
  {
    name: "Market Cap Analysis",
    description:
      "Dive deep into the larger crypto market and analyze the market capitalization of specific currencies.",
    icon: GlobeAltIcon,
  },
  {
    name: "Real-Time Prices",
    description:
      "Stay updated with real-time prices and monitor 24-hour changes in the crypto market.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Interactive Price Graph",
    description:
      "Tap on any currency to view detailed price fluctuations through interactive charts.",
    icon: ChartBarIcon,
  },
  {
    name: "Switch Currency",
    description:
      "You can switch and see prices in your country's currecny like ₹,€,$ ",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Real-Time Updates",
    description:
      "Get live updates on market trends, price changes, and top cryptocurrencies to watch.",
    icon: CloudArrowUpIcon,
  },
];

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
         {/* Introduction Section */}
         <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <strong style={{ color: '#5f06ee' }}> Coin-live </strong>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Welcome to your go-to platform for cryptocurrency enthusiasts. Whether you're a beginner or a pro, our website is here to empower your crypto journey.
          </p>
        </div>

                {/* How It Works Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div className="mt-16 max-w-5xl mx-auto lg:mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center">
            What We Offers
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">

          <div className="flex justify-center">
              <img
                src={Pic2}
                alt="Real-time data visualization"
                className=" w-44 h-48 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-lg leading-8 text-gray-400">
                Our platform live data of top cryptocurrency, providing you with real-time market insights. Users can explore detailed graphs, analyze market caps, and stay updated with price trends — all in one place.
              </p>
            </div>
            
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mt-16 max-w-5xl mx-auto lg:mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center">
            What We Aim to Do
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2  items-center">
            <div className="flex justify-center">
              <img
                src={Pic1}
                alt="Mission illustration"
                className=" w-44 h-48 rounded-md hover:scale-105 transition-transform "
              />
            </div>
            <div>
              <p className="text-lg leading-8 text-gray-400">
                Our mission is to simplify cryptocurrency tracking and analysis for everyone. We strive to provide reliable, up-to-date information and intuitive tools to make crypto accessible to all and stay updated with it.
              </p>
            </div>
          </div>
        </div>
        </div>
         
        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-white text-center">
            Features You'll Love
          </h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 mb-4">
                  <feature.icon className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
}
