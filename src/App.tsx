import Nav from "./components/Nav/Nav"
import { lazy, Suspense, useEffect, useState } from "react";
import { MovieData } from "./utils/getMovieData";

const MovieCard = lazy(() => import("./components/MovieCard/MovieCard"))

interface Movie {
  Title:string;
  Poster:string;
  Type:string;
  Year:string;
}

function App() {
  const [movieData, setMovieData] = useState<Movie[] | null>(null);
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    (async function () {
      try {
        const data = await MovieData(count);
        setMovieData(data.Search)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [count])

  console.log(count)

  return (
    <>
      <Nav setCount={setCount} />
      <div className="w-[90%] mx-auto grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 gap-5">
        <Suspense>
            {movieData?.map((items:Movie,index:number)=>{
              return <MovieCard key={index} 
              Title={items.Title}
              Poster={items.Poster}
              Year={items.Year}
              Type={items.Type}
              />
            })}
        </Suspense>
      </div>
    </>
  )
}

export default App
