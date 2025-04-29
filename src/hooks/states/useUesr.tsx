import type { UserState } from "@/redux/slices/user-slice";
import {
    clearUser as clearUserSlice,
    setUser as setUserSlice,
} from "@/redux/slices/user-slice";
import type { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const setUser = (payload: UserState) => dispatch(setUserSlice(payload));

  const clearUser = () => dispatch(clearUserSlice());

  return { user, setUser, clearUser };
};

export default useUser;
