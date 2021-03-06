import { combineReducers } from 'redux'
import { COMPANY } from '../tabs'
import { CHANGE_TAB } from './actions'

const initialState = {
  currentTab: COMPANY,
}

export const tabs = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_TAB: {
      const { tab } = action.payload
      return { ...state, currentTab: tab }
    }
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({ tabs })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
