// packages
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {

	return (
		<div>
			<Outlet />
		</div>
	);
}

export default AuthLayout;