import React from 'react';

import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
	return (
		<StyledDisplay gameOver={gameOver}>
			<p>{text}</p>
		</StyledDisplay>
	);
};

export default Display;
