import React from "react"
import { Provider } from "react-redux"

import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { createLogger } from "redux-logger"

import reducers from "."

const logger = createLogger()
const createStore = () =>
  reduxCreateStore(reducers, {}, applyMiddleware(reduxThunk, logger))

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
