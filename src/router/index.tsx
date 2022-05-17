import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ROUTE, ROUTES } from './routes'


const Router: FC<{}> = () => {

    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map(({ path, Element }) => <Route key={path} path={path} element={<Element />} />)}
                <Route
                    path="*"
                    element={<Navigate to={ROUTE.MAIN} replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
