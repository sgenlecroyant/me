import {createStore} from 'redux'
import { menuReducer } from '../reducer'

export const store = createStore(menuReducer)
