import React from 'react';

import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
	return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

// Renders only when the Cell component changes by remembering
export default React.memo(Cell);
