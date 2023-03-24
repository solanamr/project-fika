import React, { useState, useEffect } from "react";
import { fetchMovies, postMovie } from "../../redux/states/moviesSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddMovie = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    description: "",
    year: "",
    genre: "",
    cast: [],
    crew: [],
    rating: 0,
    picture: "",
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postMovie(input));
    setInput({
      title: "",
      description: "",
      year: "",
      genre: "",
      cast: [],
      crew: [],
      rating: 0,
      picture: null,
    });
    Swal.fire({
      icon: "success",
      title: "Película agregada exitosamente",
    });
  }

  return (
    <div className="bg-black border pb-10">
      <Link to="/">
        <button className="text-lightGrey font-medium bg-darkGrey rounded-full px-10 py-2 mt-5 ml-2 hover:bg-pink hover:transition hover:duration-300">
          Volver a home
        </button>
      </Link>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="lg:bg-darkGrey lg:w-[650px] lg:mt-20 lg:ml-[30%] rounded-lg pb-5"
      >
        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Título
        </label>
        <input
          type="text"
          value={input.title}
          name="title"
          placeholder="Título"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Descripción
        </label>
        <input
          type="text"
          value={input.description}
          name="description"
          placeholder="Descripción"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Fecha de estreno
        </label>
        <input
          type="text"
          value={input.year}
          name="year"
          placeholder="Estreno"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Género
        </label>
        <input
          type="text"
          value={input.genre}
          name="genre"
          placeholder="Género"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Elenco
        </label>
        <input
          type="text"
          value={input.cast}
          name="cast"
          placeholder="Elenco"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Dirección
        </label>
        <input
          type="text"
          value={input.crew}
          name="crew"
          placeholder="Dirección"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Rating
        </label>
        <input
          type="number"
          value={input.rating}
          name="rating"
          placeholder="Rating"
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey text-softGrey lg:ml-[35%] mt-5 mb-5 text-center lg:w-60"
        />

        <label
          htmlFor=""
          className="flex justify-center text-softGrey text-2xl pt-5"
        >
          Imagen
        </label>
        <input
          type="text"
          value={input.picture}
          name="picture"
          placeholder=""
          onChange={(e) => handleChange(e)}
          className="border-b-2 border-orange bg-black ml-32 lg:bg-darkGrey lg:ml-[33%] mt-5 text-center lg:w-64"
        />

        <button
          type="submit"
          className="flex text-black rounded-lg text-xl mt-10 px-2 py-1 ml-4 bg-orange"
        >
          Agregar película
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
