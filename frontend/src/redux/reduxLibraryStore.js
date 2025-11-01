import { ADD_BOOK } from "./action";

const initialState = {
    books: []
};

export const reduxLibraryStore = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        default:
            return state;
    }
};
