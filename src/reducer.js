export const reducer = (state, { type, payload }) => {
  switch (type) {

    case 'LOAD':
      return {
        ...state,
        listItems: payload || []
      }

    case 'DELETE':
      return {
        ...state,
        listItems: state.listItems.filter(el => el.id !== payload.id),
      }

    case 'CHANGE':
      const input = document.querySelector('.list-input');
      const currentIndex = state.listItems.findIndex(el => el.id === payload.id);

      input.value = state.listItems[currentIndex].title;
      const newArr = state.listItems.filter(el => el.id !== payload.id);

      return {
        ...state,
        listItems: newArr
      }

    case 'ADD':
      const newList = [...state.listItems, payload];
      localStorage.setItem('list#1', JSON.stringify(newList));
      return {
        ...state,
        listItems: newList,
      }

    case 'CHECKED':
      const indexCheck = state.listItems.findIndex(el => el.id === payload.id);

      const checkArr = state.listItems.map((el, index) => {
        if (index === indexCheck) {
          return {
            ...el,
            isChecked: !el.isChecked,
          }
        } else {
          return el;
        }
      });

      localStorage.setItem('list#1', JSON.stringify(checkArr));

      return {
        ...state,
        listItems: checkArr,
      }

    default: return state;
  }
}
