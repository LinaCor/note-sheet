import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  listItems: [
    {
      id: '1',
      title: 'List #1',
      items: [
        { id: uuidv4(), title: 'Погладить кактус', isChecked: true, indexList: 0 },
      ],
    },
    {
      id: '2',
      title: 'List #2',
      items: [
        { id: uuidv4(), title: 'Стать королём шаманов', isChecked: false, indexList: 1 },
      ],
    },
    {
      id: '3',
      title: 'List #3',
      items: [],
    },
    {
      id: '4',
      title: 'List #4',
      items: [],
    },
    {
      id: '5',
      title: 'List #5',
      items: [],
    },
    {
      id: '6',
      title: 'List #6',
      items: [],
    },
    {
      id: '7',
      title: 'List #7',
      items: [],
    },
    {
      id: '8',
      title: 'List #8',
      items: [],
    },
    {
      id: '9',
      title: 'List #9',
      items: [],
    },
    {
      id: '10',
      title: 'List #10',
      items: [],
    }],
};

export const ListContext = createContext();


export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.getListitem = (data) => {
    dispatch({ type: 'LOAD', payload: data });
  }

  value.removeListItem = (id, index) => {
    dispatch({ type: 'DELETE', payload: { id, index } });
  }

  value.changeListitem = (id, index) => {
    dispatch({ type: 'CHANGE', payload: { id, index } });
  }

  value.addNewListItem = (item, index) => {
    dispatch({ type: 'ADD', payload: { item, index } });
  }

  value.isItemChecked = (id, index) => {
    dispatch({ type: 'CHECKED', payload: { id, index } });
  }



  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  )
};