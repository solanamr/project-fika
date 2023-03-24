

const Movies = ({ items }) => {


    return (
        <div className="ml-5 mr-5">
            <h2 className="text-lightGrey text-2xl font-semibold pb-5">{items.title}</h2>
            <img src={items.picture} alt="movie image" className=""/>
            <p className="text-lightGrey text-xl text-center pt-5">⭐{items.rating}</p>
        </div>
    );
}
 
export default Movies;