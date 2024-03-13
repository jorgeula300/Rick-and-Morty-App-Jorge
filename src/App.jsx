import { useEffect, useState } from "react"
import useFetch from "./hooks/useFetch"
import getRandomNumber from "./services/getRandomNumber"
import LocationInfo from "./components/LocationInfo"
import ResidentCard from "./components/ResidentCard"
import FormSearch from "./components/FormSearch"
import Header from "./components/Header"
import Pagination from "./components/Pagination"


function App() {

  const randomLocation = getRandomNumber(126)
  const [locationSelect, setLocationSelect] = useState(randomLocation)
  const [nDatos, setNDatos] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  
  const url = `https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`

  const [location, getLocation, hasError] = useFetch(url)
  useEffect(() => {
    getLocation()

  }, [locationSelect,currentPage])

  const indexFin = currentPage * nDatos;
  const indexIni = indexFin - nDatos;
  const nPages = Math.ceil(location?.residents.length / nDatos);
  
  const residents = location?.residents.slice(indexIni,indexFin)


  return (
    <section className=" bg-[#05292E] text-white w-full min-h-[100vh]">
      <Header />
      <h1 className=" text-center text-3xl font-bold my-4"><samp className=" text-[#79B624] ">Rick and</samp> Morty App</h1>
      <FormSearch setLocationSelect={setLocationSelect} />
      {
        hasError ? (<h2 className=" text-2xl"> ❌ Hey! You must provide an id  from 1 to 126  </h2>) : (
          <>
            <LocationInfo location={location} />
            <div className="xl:max-w-[70vw] xl:min-w-[50vh] grid lg:grid-cols-4 lg:max-w-[50vw] lg:min-w-[79vw] md:grid-cols-3 md:max-w-[80vw] md:min-w-[60vw] sm:grid-cols-2 sm:max-w-[90vw] sm:min-w-[50vw]   gap-3 mx-auto">
              {
                residents?.map(url => (
                  <ResidentCard key={url} url={url} locationSelect={locationSelect} />
                ))
              }
            </div>
        

        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />



          </>
        )
      }

    </section>
  )
}

export default App
