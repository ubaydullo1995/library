import Home from '../pages/home/Home'
import Section from '../pages/section/Section'
import Header from '../components/header/Header'
import NotFound from '../pages/notFound/NotFound'


export const routes = [ 
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/section',
        element: <Section />
    },
    {
        path: '/header',
        element: <Header />
    },
    {
        path: '*',
        element: <NotFound />
    }
]