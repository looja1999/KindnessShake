import HeroImage from '@/public/HeroImage.jpg';
import Eng from '@/public/eng.svg';
import Social from '@/public/social.svg';
import Trip from '@/public/trip.svg';
import Image from 'next/image';
import App from "@/public/ourapp.png";

export const metadata = {
  title: 'VMS - Home',
}

export default function Home() {
  return (
    <main className=" mx-auto flex flex-col gap-10 w-[1140px] mb-8">
      {/* Hero  */}
      <div className="h-80 mx-auto rounded-lg flex relative">
        <Image src={HeroImage} width={"100%"} height={"100%"} className="object-cover rounded-3xl" />
        <div className="absolute h-60 w-[900px] top-8 left-36 flex flex-col items-center justify-center ">
          <div className='w-full bg-gray-50 rounded-lg h-48 opacity-90 flex flex-col gap-4 items-center justify-top pt-6'>
            <h1 className='text-xl font-bold text-gray-700'>Spreading Kindness to everyone</h1>
            <div className='w-full flex flex-col gap-2'>
              {/* Options */}
              <ul className='flex mx-2 border-b border-gray-300 font-bold text-gray-600' >
                <li className="w-40 text-center border-b-2 border-transparent p-2 hover:border-b-2 hover:border-indigo-500 cursor-pointer">Accomodation</li>
                <li className="w-40 text-center border-b-2 border-transparent p-2 hover:border-b-2 hover:border-indigo-500 cursor-pointer">Vacancies</li>
                <li className="w-40 text-center border-b-2 border-transparent p-2 hover:border-b-2 hover:border-indigo-500 cursor-pointer">Support</li>
              </ul>
              {/* Search bar */}
              <div className='w-full m-2 h-[50px] flex flex-grow gap-2'>
                <input className='rounded-lg h-full w-[70%] bg-transparent p-4 text-gray-500 hover:bg-gray-200' placeholder='Search for suburb or state in the NT 🦘' />
                <div className='flex gap-2 flex-grow'>
                  <button className="px-2 py-1.5 border border-gray-500  hover:bg-gray-100 w-24 rounded-full">
                    Filter
                  </button>
                  <button className="px-2 py-1.5 bg-indigo-700 text-white  hover:text-indigo-700 hover:border hover:bg-indigo-100 hover:border-indigo-700 w-24 rounded-full">
                    Search
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex gap-4 justify-center flex-col'>
        <h1 className='text-2xl font-bold'> Explore all benefits for International Students </h1>
        <div className='flex gap-3'>
          <button className="px-4 py-1.5 min-w-[80px] border border-gray-500 rounded-full hover:bg-gray-100 ">
            Networking
          </button>
          <button className="px-4 py-1.5 min-w-[80px] border border-gray-500 rounded-full hover:bg-gray-100">
            Jobs
          </button>
          <button className="px-4 py-1.5 min-w-[80px] border border-gray-500 rounded-full hover:bg-gray-100">
            Events
          </button>
          <button className="px-4 py-1.5 min-w-[80px] border border-gray-500 rounded-full hover:bg-gray-100">
            Rents
          </button>
          <button className="px-4 py-1.5 min-w-[80px] border border-gray-500 rounded-full hover:bg-gray-100">
            Support
          </button>
        </div>
        {/* Based on each tabs */}
        <div className='grid grid-cols-3 gap-6'>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <h1 className='font-bold text-center'>Meet new people</h1>
            <div className='w-full flex items-center justify-center'>
              <Image src={Eng} width={180} />
            </div>
            <p className='text-sm text-center'>Find people from different communities and background.</p>
          </div>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <h1 className='font-bold text-center'>Expand your connections</h1>
            <div className='w-full flex items-center justify-center'>
              <Image src={Trip} width={120} />
            </div>
            <p className='text-sm text-center'>Join or Volunteer in our various events.</p>
          </div>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <h1 className='font-bold text-center'>Find job references</h1>
            <div className='w-full flex items-center justify-center'>
              <Image src={Social} width={120} className='border border-gray-300 rounded-lg' />

            </div>
            <p className='text-sm text-center'>Find referal to jobs and various other information.</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'> Our App </h1>
        <div className=' w-[800px] shadow-2xl mx-auto '>
          <Image src={App} width={"80%"} height={"80%"} className="object-contain" />
        </div>
        <p className='text-center text-gray-500 text-sm'>Demonstration of our app</p>
      </div>
      <div className='w-full flex gap-4 justify-center flex-col'>
        <h1 className='text-2xl font-bold'> Message from our Board Members </h1>
        <div className='grid grid-cols-3 gap-6'>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <div className='flex gap-3 items-center'>
              <div className='w-14 h-14 rounded-full border'>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-lg font-bold'>Sushan Khatiwada</h1>
                <h2 className='text-sm'>Chair@<span className="text-indigo-500">KindnessShake</span></h2>
              </div>
            </div>

            <div className='w-full h-full bg-gray-100 rounded-lg text-sm p-3 overflow-y-scroll'>
              <p>Journey to Kindness Shake has been extremely wonderful. My main goal 🎯 is to look after International Students and provide them a better environment for them to study, live, and make their future. 🦄</p>
            </div>
          </div>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <div className='flex gap-3 items-center'>
              <div className='p-6 rounded-full border'></div>
              <div className='flex flex-col'>
                <h1 className='text-lg font-bold'>Sujan Manandhar</h1>
                <h2 className='text-sm'>Board@<span className="text-indigo-500">KindnessShake</span></h2>
              </div>
            </div>

            <div className='w-full h-full bg-gray-100 rounded-lg text-sm p-3 overflow-y-scroll'>
              <p>Journey to Kindness Shake has been extremely wonderful. My main goal 🎯 is to look after International Students and provide them a better environment for them to study, live, and make their future. 🦄</p>
            </div>
          </div>
          <div className="col-span-1 h-60 border border-gray-300 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
            <div className='flex gap-3 items-center'>
              <div className='p-6 rounded-full border'></div>
              <div className='flex flex-col'>
                <h1 className='text-lg font-bold'>Looja Tuladhar</h1>
                <h2 className='text-sm'>Tech@<span className="text-indigo-500">KindnessShake</span></h2>
              </div>
            </div>

            <div className='w-full h-full bg-gray-100 rounded-lg text-sm p-3 overflow-y-scroll'>
              <p>Journey to Kindness Shake has been extremely wonderful. My main goal 🎯 is to look after International Students and provide them a better environment for them to study, live, and make their future. 🦄</p>
              <p><b>Contact</b> me at info@kindness-shake.com.au</p>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
