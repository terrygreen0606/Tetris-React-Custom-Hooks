export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	);

export const checkCollision = (player, stage, { x, y }) => {
	for (let a = 0; a < player.tetromino.length; a++) {
		for (let b = 0; b < player.tetromino[a].length; b++) {
			// 1. Check that we are on an actual tetromino cell
			if (player.tetromino[a][b] !== 0) {
				// 2. Check that movement is inside the game areas height
				if (
					!stage[a + player.pos.y + y] ||
					!stage[a + player.pos.y + y][b + player.pos.x + x] ||
					stage[a + player.pos.y + y][b + player.pos.x + x][1] !==
						'clear'
				) {
					return true;
				}
			}
		}
	}
};
