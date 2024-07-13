import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootContainer from "./RootContainer";
import HomePage from "@pages/HomePage/HomePage";

const router = createBrowserRouter([
	{
		element: <RootContainer />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/contact",
				element: <h1>contact page</h1>,
			},
			{
				path: "/resume",
				element: <h1>resume page</h1>,
			},
			{
				path: "/projects",
				element: <h1>projects page</h1>,
			},
		],
	},
]);

export default function PageRouter() {
	return <RouterProvider router={router} />;
}
