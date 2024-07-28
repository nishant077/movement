import 'react'; 

import './App.css'
import image1 from './assets/justice climate.jpg'
import image2 from './assets/icon.png'
import image3 from './assets/location.png'
import image4 from './assets/pencil.png'
import video from './assets/chure.mp4'

function App() {

  return (
    <>
      <div className="bg-[#9A1D20] w-full h-auto lg:h-96 shadow-lg rounded-lg p-8 relative">
        <div className="flex flex-col lg:flex-row justify-around items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-start space-y-4">
            <div className='flex items-center'>
              <h1 className="text-white text-4xl mt-20 lg:mt-0 font-bold">Climate <span className='text-green-400'> Justice!</span></h1>
              <img src={image2} alt='protest icon' className='ml-4 w-10 h-10' />
            </div>
            <h2 className="text-white text-center lg:text-left text-lg leading-relaxed">
              Youth-led non-profit that works to expand civic expression
              <br />
              and peaceful mobilization by integrating Art, Media, and Technology.
            </h2>
            <button className="mt-4 px-6 py-2 bg-white text-[#9A1D20] font-semibold rounded-lg shadow-md hover:bg-green-400 hover:text-white transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <img src={image1} alt="movement image" className="w-96 h-80 mt-8 lg:mt-0 mr-12 shadow-lg object-cover rounded-s-full" />
        </div>

        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-2/5">
          <div className="w-full max-w-3xl h-32 bg-gray-100 rounded-lg shadow-2xl overflow-hidden relative flex flex-col justify-center items-center p-4">
            <p className='font-bold mb-2 text-center'> Trusted by <span className='text-red-500'>100+</span> non-profit organizations <br/>Movement Held At</p>
            <div className="flex items-center">
              <img src={image3} alt="Lumbini" className="w-7 h-7 object-cover rounded-full mr-4 shadow-lg" />
              <h2 className="font-bold text-lg">Lumbini, Rupandehi</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-32">
        <h2 className="text-4xl font-bold mb-8 text-[#9A1D20]">People's Climate Mobilization</h2>
        <div className="flex justify-center w-full mt-8">
          <img src={image4} alt="Pencil icon" className="w-1/2 h-auto" />
        </div>
        <p className="text-justify text-lg leading-relaxed mt-8 px-4 lg:px-48">
          Freedom Studio is working with climate activists to strengthen their climate actions and movements in Nepal. Freedom Studio has been holding several formal/informal meetings with climate activists, community workers, civil society organizations, performers, designers, writers, and journalists to raise consciousness and solidarity for movement building in climate justice efforts. Our effort has been to design tactical, critical, strategic, and creative approaches for climate justice actions for movements led by climate activists and impacted people from climate change.
          <br />
          Freedom Studio has also been organizing intensive artivism workshops to directly connect, train, and support activists and artivists using creative and strategic tools for climate mobilization. In collaboration with communities, our organization has developed several high-quality art and more than 500 demonstration pieces in such workshops. Such art content has been displayed multiple times in public venues through open galleries, community gatherings, and markets. Some of the movements that Freedom Studio have been supporting are People’s Climate Mobilization 2021, and 2023, Justice to Dilip Mahato, Don't Gas Asia, End Fossil Fuel, etc.
        </p>
      </div>

      <div className="w-full h-2/4 mt-16">
  <video className="w-full h-full object-cover" controls autoPlay muted loop src={video}>
    Your browser does not support the video tag.
  </video>
</div>


    
    </>
  )
}

export default App
