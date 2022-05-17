import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavigateButton from '../../components/UI/NavigateButton'
import { ROUTE } from '../../router/routes'

interface BaseLayoutProps { }

const BaseLayout: FC<BaseLayoutProps> = () => {
  return (
    <>
      <div className='base-layout-title'>Base Layout</div>
      <hr />
      <NavigateButton to={ROUTE.MAIN_SUB_1} />
      <NavigateButton to={ROUTE.MAIN_SUB_2} />
      <NavigateButton to={ROUTE.BASE_PAGE} />
      <hr />
      <Outlet />
    </>
  )
}

export default BaseLayout