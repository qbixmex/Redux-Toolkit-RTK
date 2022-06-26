import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const { isLoading, pokemons, page } = useSelector(state => state.pokemons );

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);

  return (
    <div className="container">
      <h1>PokemonApp</h1>
      <hr />

      <h2>Loading: { isLoading ? 'True' : 'False'  }</h2>

      <ul>
        {
          pokemons.map(({name}) => (
            <li key={ name }>{ name }</li>
          ))
        }
      </ul>

      <button
        className="btn"
        onClick={ () => dispatch( getPokemons( page ) ) }
        disabled={ isLoading }
      >
        Next
      </button>
    </div>
  );
};
