const movieCode2 = 
`export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: getFaves(),
  },
  reducers: {
    addItem: (state, action) => {
      const newFaves = [...state.items, action.payload];
      localStorage.setItem('myfavorites', JSON.stringify(newFaves));
      state.items = newFaves;
    },
    deleteItem: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem('myfavorites', JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    },
   },
 });
`;

export default movieCode2