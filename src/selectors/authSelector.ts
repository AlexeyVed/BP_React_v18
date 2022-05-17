import { createSelector } from 'reselect'
import { RootState } from '../store'

const getAuthState = (state: RootState) => state.auth

export const authSelector = createSelector(getAuthState, (state) => state)
