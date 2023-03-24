

const Pagination = ({moviePorPag, apiJSON, paginado}) => {
    
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(apiJSON/moviePorPag); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="flex justify-center">
            {
                pageNumbers && pageNumbers.map(n =>{
                    return <button key = {n} className="text-orange pb-10 pt-10 px-10 text-3xl lg:mr-40"
                    onClick={() => paginado(n)}>{n}</button>
                })
                }
        </div>
    );
}
 
export default Pagination;