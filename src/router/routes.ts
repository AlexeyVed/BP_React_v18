import React from 'react'

import BaseLayout from '../layouts/BaseLayout'

import MainPage from '../pages/MainPage'
import GeneralPage from '../pages/GeneralPage'

export interface TPathRouteProps {
    path: string,
    Element: React.FC<any>,
    routes?: TPathRouteProps[]
}

export enum ROUTE {
    GENERAL = '/',
    MAIN = '/main'
}

export const ROUTES: TPathRouteProps[] = [
    {
        path: ROUTE.GENERAL,
        Element: BaseLayout,
        routes: [
            {
                path: ROUTE.MAIN,
                Element: MainPage
            },
            {
                path: ROUTE.GENERAL,
                Element: GeneralPage,
            }
        ]
    }

]