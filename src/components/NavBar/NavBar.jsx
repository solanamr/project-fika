import logo from "../../assets/imgs/Filmbox.png";
import icon from "../../assets/imgs/logo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, sortMovies, filterGenre } from "../../redux/states/moviesSlice";
import { Link } from "react-router-dom";
import _uniq from 'underscore/modules/uniq.js'
import Search from "../../icons/search";


const NavBar = ({ setCurrentPage, setOrden}) => {

    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const apiCopy = useSelector((state) => state.movies.moviesCopy)

    const genres = apiCopy.map(e => e.genre)
    const genresFiltered = _uniq(genres, false)


    useEffect(() => {
        dispatch(searchMovies());
      }, [dispatch]);

      const handleInputChange= (e) => {
        if(e !== ""){
            dispatch(searchMovies(e));
            // setCurrentPage(1);
        }
      }

      const handleAToZ = (e) => {
        e.preventDefault()
        dispatch(sortMovies(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    const handleGenres = (e) =>{
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }


    return (
        <div className="flex justify-between pt-3">
            <img src={logo} alt="" className="hidden lg:block w-40 ml-4"/>
            
             <input onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value)}} 
            type="text" placeholder="Buscá una película" value={name} 
            className="w-[100px] ml-4 mr-4 bg-black text-softGrey border-b-2 border-darkGrey lg:mr-0 lg:ml-0 lg:w-52"/>
            <div className="hidden lg:block lg:absolute lg:left-[520px] top-5">
                <Search/>
            </div>

            <Link to="/add">
                <button className="text-softGrey pt-3">Agregar película</button>
                </Link>

            <select onChange={e => {handleAToZ(e)}} 
            className="w-[110px] mr-4 ml-5 bg-black border-b-2 text-softGrey text-center lg:ml-10 lg:w-48">
                    <option value="">Búsqueda alfabética</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>

            <select onChange={e => {handleGenres(e)}} className="w-24 bg-black border-b-2 text-softGrey text-center mr-10">
                <option value="">Género</option>
                {
                    genresFiltered.map(g =>{
                        return(
                            <option value={g}>{g}</option>
                            )
                        })
                    }
            </select>
        </div>
    );
}
 
export default NavBar;