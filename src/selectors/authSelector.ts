import { createSelector } from 'reselect'
import { RootState } from '../store'

const getAuthState = (state: RootState) => state.auth

export const authState = createSelector(getAuthState, (state) => state)
