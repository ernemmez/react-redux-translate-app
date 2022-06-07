import { configureStore } from "@reduxjs/toolkit";
import langsSlice from "./langs/langsSlice";
import fromSlice from "./from/fromSlice";
import toSlice from "./to/toSlice";
import inOutSlice from "./inputOutput/inOutSlice";

export default configureStore({
    reducer: {
      langs:langsSlice.reducer,
      from:fromSlice.reducer,
      to:toSlice.reducer,
      inOut:inOutSlice.reducer,
    },
  });