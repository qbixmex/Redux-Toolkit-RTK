import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: 0
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startIsLoading: state => state.isLoading = true,
    setPokemons: ( _, action ) => console.log( action ),
  },
});

export const { startIsLoading, setPokemons } = pokemonSlice.actions;