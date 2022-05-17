import { FC, useEffect } from "react"
import { authSelector } from "../../selectors/authSelector";
import { useDispatch, useSelector } from "../../store"
import { signInThunk } from "../../store/auth/thunks";

type TBaseSub2Props = {}

const GeneralPage: FC<TBaseSub2Props> = () => {
  const dispatch = useDispatch();
  const authState = useSelector(authSelector);

  useEffect(() => {
    if (!authState.auth) dispatch(signInThunk())
  }, [dispatch, authState.auth])

  return <>General isLogged: {`${authState.auth}`}</>
}

export default GeneralPage