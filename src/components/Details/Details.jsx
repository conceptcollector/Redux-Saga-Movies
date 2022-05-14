import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Details() {

    useEffect(() => {
        dispatch({type: 'FETCH_MOVIE'});
        dispatch({type: 'FETCH_GENRES'})
    }, []);

    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    return (
        <>
            {movie && movie.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
                )})}
            {genres && genres.map((genre) => {
                return (
                <h4 >{genre.name}</h4>
                )
            })}
        </>
    )
}

export default Details;