import { createStore } from "redux"
import { reduxLibraryStore } from "./reduxLibraryStore"
import { loggerMiddleware } from "./loggerMiddlewareLibrary"
import { applyMiddleware } from "redux"


export const store = createStore(reduxLibraryStore, applyMiddleware(loggerMiddleware));