import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/main";
import Todo from "../Todo/todo";
import RootLayout from "../layouts/layout";

const Router = createBrowserRouter([
    {

        element: <RootLayout />,
        children: [{
            path: "/",
            element: <Main />

        }]
    },
    {
        path: "/todo/:id",
        element: <Todo />
    },
]);

export default Router