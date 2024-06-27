import { useEffect, useRef, useState } from "react";
import { throttle, debounce } from "throttle-debounce";
import styles from "./styles.module.css";

const TILE_SIZE = 100;
const MOUSE_COLLIDER_SIZE = 200;

export default function ContactBackground() {
	const wrapperRef = useRef();
	const [tilePos, setTilePos] = useState([]);
	const [tilesCollided, setTilesCollided] = useState([]);

	// Calculate the initial positions of the tiles on component mount.
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => calcTiles(), []);

	// Add event listeners for window resize and mouse movement.
	useEffect(() => {
		window.addEventListener("resize", calcTiles);
		window.addEventListener("mousemove", mouseCollision);

		return () => {
			window.removeEventListener("resize", calcTiles);
			window.removeEventListener("mousemove", mouseCollision);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tilePos]);

	// Handle mouse movement and detect collisions with tiles.
	const mouseCollision = throttle(50, (e) => {
		requestAnimationFrame(() => {
			// Create a rectangle that follows the mouse.
			// This rectangle is used as the mouses collider.
			const rect = {
				left: e.x - MOUSE_COLLIDER_SIZE,
				top: e.y - MOUSE_COLLIDER_SIZE,
				right: e.x + MOUSE_COLLIDER_SIZE,
				bottom: e.y + MOUSE_COLLIDER_SIZE,
			};

			// Check which tiles are colliding with the mouse collider.
			let tilesCollided = [];

			for (let row = 0; row < tilePos.length; row++) {
				for (let col = 0; col < tilePos[row].length; col++) {
					const tile = tilePos[row][col];
					if (
						rect.right >= tile.left &&
						rect.left <= tile.right &&
						rect.bottom >= tile.top &&
						rect.top <= tile.bottom
					) {
						tilesCollided.push(`${row}-${col}`);
					}
				}
			}

			setTilesCollided(tilesCollided);
		});
	});

	// Calculate the positions of the tiles based on the wrapper element's dimensions.
	const calcTiles = debounce(100, () => {
		const wrapperEl = wrapperRef.current;

		// Calculate the number of columns and rows needed to fill the wrapper element.
		const cols = Math.floor(wrapperEl.clientWidth / TILE_SIZE);
		const rows = Math.floor(wrapperEl.clientHeight / TILE_SIZE);

		// Set CSS variables for the grid template.
		wrapperEl.style.setProperty("--cols", cols);
		wrapperEl.style.setProperty("--rows", rows);

		// Create a 2D vector containing the positions of all tiles.
		const tilesPos = [];

		for (let row = 0; row < rows; row++) {
			const currentRow = [];
			for (let col = 0; col < cols; col++) {
				currentRow.push({
					left: col * TILE_SIZE,
					top: row * TILE_SIZE,
					right: (col + 1) * TILE_SIZE,
					bottom: (row + 1) * TILE_SIZE,
				});
			}
			tilesPos.push(currentRow);
		}

		setTilePos(tilesPos);
	});

	return (
		<div ref={wrapperRef} className={`${styles["wrapper"]} h-dvh w-full bg-primary p-[2px]`}>
			{tilePos.map((row, rowIndex) =>
				row.map((col, colIndex) => {
					const collided = tilesCollided.includes(`${rowIndex}-${colIndex}`);

					return (
						<div key={`${rowIndex}-${colIndex}`} className="h-full w-full select-none p-[1px]">
							<div
								className={`flex h-full w-full items-center justify-center bg-secondary text-xs font-semibold uppercase transition-all duration-1000 ${collided && "scale-75 rounded-md"}`}
							></div>
						</div>
					);
				}),
			)}
		</div>
	);
}
