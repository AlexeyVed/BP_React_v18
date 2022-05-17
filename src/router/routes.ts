import React from 'react'

import MainPage from '../pages/MainPage'
import BasePage from '../pages/BasePage'

interface TPathRouteProps {
    path: string,
    Element: React.FC<any>
}

export enum ROUTE {
    MAIN = '/',
    BASE_PAGE = '/base-page'
}

export const ROUTES: TPathRouteProps[] = [
    {
        path: ROUTE.MAIN,
        Element: MainPage
    },
    {
        path: ROUTE.BASE_PAGE,
        Element: BasePage
    }
]