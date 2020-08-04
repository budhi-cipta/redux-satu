import {combineReducers} from 'redux'

import { pemainReducer } from './pemainReduce'
import { keuanganReducer } from './keuanganReduce'


export const rootReducer = combineReducers({
    pemain:pemainReducer,
    keuangan:keuanganReducer
})