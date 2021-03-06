
import React, { FC, useEffect } from "react"
import { authSelector } from "../../selectors/authSelector";
import { useDispatch, useSelector } from "../../store";
import { signInThunk } from "../../store/auth/thunks";

type TMainPageProps = {}

const MainPage: FC<TMainPageProps> = () => {
  const dispatch = useDispatch();
  const authState = useSelector(authSelector);

  useEffect(() => {
    if (!authState.auth) dispatch(signInThunk())
  }, [dispatch, authState.auth])

  return <>Main isLogged: {`${authState.auth}`}</>
}

export default MainPage