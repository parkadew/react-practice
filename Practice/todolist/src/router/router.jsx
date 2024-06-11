import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/main";
import Todo from "../Todo/todo";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/todo/:id",
        element: <Todo />
    },
]);


export default Router