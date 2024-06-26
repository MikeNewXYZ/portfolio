import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const TILE_SIZE = 100;
const MOUSE_COLLIDER_SIZE = 100;

export default function ContactBackground() {
	const wrapperRef = useRef();
	const [tilePos, setTilePos] = useState([]);
	const [tilesCollided, setTilesCollided] = useState([]);

	useEffect(() => {
		calcTiles();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", calcTiles);
		window.addEventListener("mousemove", mouseCollision);

		return () => {
			window.removeEventListener("resize", calcTiles);
			window.removeEventListener("mousemove", mouseCollision);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tilePos]);

	const mouseCollision = (e) => {
		const { x, y } = e;
		const rect = {
			left: x - MOUSE_COLLIDER_SIZE,
			top: y - MOUSE_COLLIDER_SIZE,
			right: x + MOUSE_COLLIDER_SIZE,
			bottom: y + MOUSE_COLLIDER_SIZE,
		};

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
	};

	const calcTiles = () => {
		const wrapperEl = wrapperRef.current;

		// Calc the amount of columns and rows of tiles needed
		// to fill the wrapper element.
		const cols = Math.floor(wrapperEl.clientWidth / TILE_SIZE);
		const rows = Math.floor(wrapperEl.clientHeight / TILE_SIZE);

		// Set css variables for columns and rows for the
		// wrappers css grid template rows and columns.
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
	};

	return (
		<div ref={wrapperRef} className={`${styles["wrapper"]} h-dvh w-full bg-primary p-[2px]`}>
			{tilePos.map((row, rowIndex) =>
				row.map((col, colIndex) => {
					const collided = tilesCollided.includes(`${rowIndex}-${colIndex}`);

					return (
						<div key={`${rowIndex}-${colIndex}`} className="h-full w-full select-none p-[1px]">
							<div
								className={`flex h-full w-full items-center justify-center bg-secondary transition-transform duration-1000 ${collided && "scale-75"}`}
							>
								{/* {`${rowIndex}-${colIndex}`} */}
							</div>
						</div>
					);
				}),
			)}
		</div>
	);
}
