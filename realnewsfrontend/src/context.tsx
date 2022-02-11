import Context from '@mui/base/TabsUnstyled/TabsContext';
import { createContext } from 'react'

interface Context {
  userId?: Number;
  username?: string;
  token?: string;
}

let context: Context = {
  userId: undefined,
  username: "",
  token: ""
}

export const UserContext = createContext(context);
