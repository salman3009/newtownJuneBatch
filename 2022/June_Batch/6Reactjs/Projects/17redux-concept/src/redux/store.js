import { configureStore } from "@reduxjs/toolkit";
import counterRedux from "./counter";

export default configureStore({
  reducer: {
    counter: counterRedux
  }
});



