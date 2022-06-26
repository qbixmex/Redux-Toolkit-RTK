import { startIsLoading, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async ( dispatch, getState ) => {
    dispatch( startIsLoading() );

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1
      })
    );
  };
};
