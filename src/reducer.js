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
        listItems: state.listItems.map((list, index) => {
          if (index === payload.index) {
            return {
              ...list,
              items: list.items.filter(el => el.id !== payload.id)
            };
          }
          return list;
        }),
      };

    case 'CHANGE':
      const input = document.querySelector(`.list-input-${payload.index}`);
      return {
        ...state,
        listItems: state.listItems.map((list, index) => {
          if (index === payload.index) {
            const currentTitleArray = list.items.filter(el => el.id === payload.id);
            const currentTitle = currentTitleArray[0].title;
            input.value = currentTitle;
            return {
              ...list,
              items: list.items.filter(el => el.id !== payload.id)
            };
          }
          return list;
        }),
      };

    case 'ADD':
      return {
        ...state,
        listItems: state.listItems.map((list, index) => {
          if (index === payload.index) {
            return {
              ...list,
              items: [...list.items, payload.item]
            };
          }
          return list;
        }),
      }

    case 'CHECKED':
      return {
        ...state,
        listItems: state.listItems.map((list, index) => {
          if (index === payload.index) {
            const newArr = list.items.map((el) => {
              if (el.id === payload.id) {
                return {
                  ...el,
                  isChecked: !el.isChecked,
                }
              } else {
                return el;
              }
            })
            return {
              ...list,
              items: newArr,
            };
          }

          return list;
        }),
      };

    default: return state;
  }
}
