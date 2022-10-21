import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category/Category";
import Home from "../../components/Home/Home";
import Login from "../../components/LogIn/Login";
import Registration from "../../components/LogIn/Registration";
import News from "../../components/News/News";
import Profile from "../../components/Profile/Profile";
import TermsAndCondition from "../../components/TermsAndConditions/TermsAndCondition";
import Layout from "../../layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`)
                },
                element: <PrivateRoute> <News></News></PrivateRoute>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])