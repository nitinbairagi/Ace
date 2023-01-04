import {configureStore, createSlice} from '@reduxjs/toolkit';

const Initialstate = [
  {
    name: 'fresh Vegetables',
    sub: [
      {label: 'Tomato', value: 'Tomato'},
      {label: 'Spinach', value: 'Spinach'},
      {label: 'Onions', value: 'Onions'},
    ],
  },
  {
    name: 'Diet Food',
    sub: [
      {label: 'Quinoa', value: 'Quinoa'},
      {label: 'Oats', value: 'Oats'},
    ],
  },
  {
    name: 'Healthy Food',
    sub: [
      {label: 'Boiled Eggs', value: 'Boiled Eggs'},
      {label: ' Whole Wheat', value: ' Whole Wheat'},
    ],
  },
  {
    name: 'Fast Food Items ',
    sub: [
      {label: 'Sandwich', value: 'Sandwich'},
      {label: 'Burger', value: 'Burger'},
      {label: 'Tacos', value: 'Tacos'},
      {label: 'Pizza', value: 'Pizza'},
    ],
  },
  {
    name: 'Juicy Fruits ',
    sub: [
      {label: 'Watermelon', value: 'Watermelon'},
      {label: 'Grapes', value: 'Grapes'},
      {label: 'Berries', value: 'Berries'},
    ],
  },
];

const dataSlice = createSlice({
  name: 'Listdata',
  initialState: Initialstate,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
  },
});

const Store = configureStore({
  reducer: {list: dataSlice.reducer},
});

export const dataaction = dataSlice.actions;

export default Store;
