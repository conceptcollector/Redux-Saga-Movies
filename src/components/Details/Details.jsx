import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Details.css';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function Details() {

    useEffect(() => {
        dispatch({type: 'FETCH_MOVIE'});
        dispatch({type: 'FETCH_GENRES'})
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    return (
        <div className='movie-details'>
            {genres && genres.map((genre) => {
                return (
                <h4 >{genre.name}</h4>
                )
            })}
            {movie && movie.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
                )})}
            
            <Button
            variant="contained"
            color='primary'
            onClick={() => {
                history.push(`/`);
            }}>
                Let's all go to the lobby
            </Button>
        </div>
    )
}

export default Details;