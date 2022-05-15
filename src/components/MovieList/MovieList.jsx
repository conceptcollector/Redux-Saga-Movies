import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                <Grid container>
                {movies.map(movie => {
                    return (
                        <Grid
                            item xs={12} sm={6} md={4} lg={3}
                            key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img
                            src={movie.poster}
                            alt={movie.title}
                            onClick={() => {
                                console.log(movie.id);
                                dispatch({
                                    type: 'FETCH_MOVIE',
                                    payload: movie.id
                                })
                                dispatch({
                                    type: 'FETCH_GENRES',
                                    payload: movie.id
                                })
                                history.push(`/Details`);
                            }
                            }/>
                        </Grid>
                    );
                })}
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;