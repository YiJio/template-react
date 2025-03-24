// packages
import React from 'react';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// contexts/providers
// layouts
// pages/routes

// important variables

// uncomment this if using routers, replace with actual pages
/*const router = createBrowserRouter([{
	element: <RootLayout />,
	errorElement: <NotFoundPage />,
	children: [
		{
			element: <HomeLayout />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/search', element: <SearchPage /> },
			]
		}, {
			element: <AuthLayout />,
			children: [
				{ path: '/auth/signin', element: <SignInPage /> },
				{ path: '/auth/signup', element: <SignUpPage /> },
			]
		}, {
			element: <ProfileLayout />,
			children: [
				{ path: '/u/:uid', element: <ProfilePage /> },
			]
		}, {
			element: <DashboardLayout />,
			children: [
				{ path: '/dashboard', element: <DashboardPage /> },
				{ path: '/dashboard/reports', element: <DashboardReportsPage /> },
			]
		}, {
			element: <SettingsLayout />,
			children: [
				{ path: '/settings/account', element: <SettingsAccountPage /> },
				{ path: '/settings/security', element: <SettingsSecurityPage /> },
			]
		},
	]
}]);*/

const App = () => {

	// get a loading state
	/*if (isLoading) {
		return <>lOADING...</>
	}*/

	return (
		<RouterProvider router={router} />
	);
}

export default App;