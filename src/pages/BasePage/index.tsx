import React, { FC } from "react"
import NavigateButton from "../../components/UI/NavigateButton"
import { ROUTE } from "../../router/routes"

type TBasePageProps = {}

const BasePage: FC<TBasePageProps> = () => {

  return <>
    BasePage
    <hr />
    <NavigateButton to={ROUTE.MAIN} />
  </>
}

export default BasePage