import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  listItems: [],
};

export const ListContext = createContext();



export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.getListitem = (data) => {
    dispatch({ type: 'LOAD', payload: data });
  }

  value.removeListItem = (id) => {
    dispatch({ type: 'DELETE', payload: { id: id } });
  }

  value.changeListitem = (id) => {
    dispatch({ type: 'CHANGE', payload: { id: id } });
  }

  value.addNewListItem = (item) => {
    dispatch({ type: 'ADD', payload: item });
  }

  value.isItemChecked = (id) => {
    dispatch({ type: 'CHECKED', payload: { id: id } });
  }

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  )
};