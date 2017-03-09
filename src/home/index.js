import React from 'react';
import AppLayout from '../app-layout';
import Welcome from '../welcome';

export default ({ pathname }) => (
	<div>
		<Welcome>
			<AppLayout />
		</Welcome>
	</div>
);