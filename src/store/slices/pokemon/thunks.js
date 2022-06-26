import { pokemonApi } from '../../../api/pokemonApi';
import { startIsLoading, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async ( dispatch, getState ) => {
    dispatch( startIsLoading() );

    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1
      })
    );
  };
};
