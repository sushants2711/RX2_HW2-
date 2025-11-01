export const ADD_BOOK = "add";

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    };
};
