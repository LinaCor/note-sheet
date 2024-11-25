import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  listItems: [
    {
      id: 'list1',
      title: 'List #1',
      items: [
        { id: uuidv4(), title: 'Облизать кактус', isChecked: true, indexList: 0 },
      ],
    },
    {
      id: 'list2',
      title: 'List #2',
      items: [
        { id: uuidv4(), title: 'Стать королём шаманов', isChecked: false, indexList: 1 },
      ],
    },
    {
      id: 'list3',
      title: 'List #3',
      items: [],
    },
    {
      id: 'list4',
      title: 'List #4',
      items: [],
    },
    {
      id: 'list5',
      title: 'List #5',
      items: [],
    },
    {
      id: 'list6',
      title: 'List #6',
      items: [],
    },
    {
      id: 'list7',
      title: 'List #7',
      items: [],
    },
    {
      id: 'list8',
      title: 'List #8',
      items: [],
    },
    {
      id: 'list9',
      title: 'List #9',
      items: [],
    },
    {
      id: 'list10',
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