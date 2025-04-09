import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import AboutGame from "./pages/AboutGame";
import Main from "./pages/Main";
import Sponsor from "./components/modals/Sponsor";
import { ABOUTAPPLICATION_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, UPDATES_ROUTE, ABOUT_US_ROUTE} from "./utils/consts";
import UpdatesGame from "./pages/UpdatesGame";
import AboutUs from "./components/modals/AboutUs";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ABOUTAPPLICATION_ROUTE,
        Component: AboutGame
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: UPDATES_ROUTE,
        Component: UpdatesGame
    }
]