import React from 'react'

import BaseLayout from '../layouts/BaseLayout'

import MainPage from '../pages/MainPage'
import BasePage from '../pages/BasePage'
import BaseSub1 from '../pages/BasePage/BaseSub2'
import BaseSub2 from '../pages/BasePage/BaseSub1'

export interface TPathRouteProps {
    path: string,
    Element: React.FC<any>,
    routes?: TPathRouteProps[]
}

export enum ROUTE {
    MAIN = '/main',
    MAIN_SUB_1 = '/main/sub1',
    MAIN_SUB_2 = '/main/sub2',
    BASE_PAGE = '/base-page'
}

export const ROUTES: TPathRouteProps[] = [
    {
        path: ROUTE.MAIN,
        Element: BaseLayout,
        routes: [
            {
                path: ROUTE.MAIN_SUB_1,
                Element: BaseSub1,
            },
            {
                path: ROUTE.MAIN_SUB_2,
                Element: BaseSub2,
            }
        ]
    },
    {
        path: ROUTE.BASE_PAGE,
        Element: BasePage
    }
]