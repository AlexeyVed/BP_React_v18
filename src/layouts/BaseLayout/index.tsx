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
      <NavigateButton to={ROUTE.GENERAL} />
      <NavigateButton to={ROUTE.MAIN} />
      <hr />
      <Outlet />
    </>
  )
}

export default BaseLayout