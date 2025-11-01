export const loggerMiddleware = (store) => (next) => (action) => {
    console.log("Current State: ", store.getState());
    console.log("Action Type: ", action);
    next(action);
    console.log("New State: ", store.getState());
} 