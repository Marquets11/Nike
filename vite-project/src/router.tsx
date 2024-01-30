import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
		],
	},
]);

export default router;
