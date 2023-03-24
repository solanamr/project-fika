import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovies, deleteMovie } from "../../redux/states/moviesSlice";
import Movies from "../Movies/Movies";
import Pagination from "../Pagination/Pagination";
import Delete from "../../icons/delete";

const Home = () => {
  const dispatch = useDispatch();
  const apiJSON = useSelector((state) => state.movies.movies);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePorPag, setMoviePorPag] = useState(4);
  const indexLastMovie = currentPage * moviePorPag;
  const indexFirstMovie = indexLastMovie - moviePorPag;
  const currentMovie = apiJSON.slice(indexFirstMovie, indexLastMovie);

  const paginado = (nroPagina) => {
    setCurrentPage(nroPagina);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="bg-black">
      <NavBar setCurrentPage={setCurrentPage} setOrden={setOrden}/>

     <div className="bg-orange flex justify-center rounded-3xl py-3 mt-10">
         <h1 className="text-black text-4xl lg:text-5xl font-bold">Tus películas</h1>
     </div>

      <div className="flex flex-wrap justify-center pt-5">
        {currentMovie.map((e, i) => {
          return (
            <div key={i} className=" w-5/12">
              <div className="flex justify-end mt-10">
                <button onClick={() => handleDelete(e.id)} className="text-end">
                  <Delete />
                </button>
              </div>
              <Link to={`/detail/${e.id}`}>
                <Movies items={e} />
              </Link>
            </div>
          );
        })}
        
      </div>

      <Pagination
        moviePorPag={moviePorPag}
        apiJSON={apiJSON.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Home;
