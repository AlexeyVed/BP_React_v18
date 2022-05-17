import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { authSelector } from '../selectors/authSelector'
import { useSelector } from '../store'

import { ROUTE, ROUTES } from './routes'


const Router: FC<{}> = () => {
    const authState = useSelector(authSelector)

    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map(({ path, Element, routes }) => {
                    return <Route key={path} path={path} element={<Element />} >
                        {routes ? routes.map(({ path, Element }) =>
                            <Route key={path} path={path} element={<Element />} />
                        ) : null}
                    </Route>
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
