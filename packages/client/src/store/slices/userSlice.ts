import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

interface userState {
  user: IUser | null
}

const initialState: userState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return { ...state, user: { ...state.user, ...action.payload } }
    },
    deleteUser: state => {
      state.user = null
    },
  },
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer
