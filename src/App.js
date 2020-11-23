import React from 'react';
import { Button } from '@servicetitan/design-system';

import '@servicetitan/anvil-fonts/dist/css/anvil-fonts.css';
import '@servicetitan/design-system/dist/system.css';
import './styles.css';

export default function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Button>Test</Button>
		</div>
	);
}
