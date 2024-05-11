"use client";
import { createContext, useContext, useState } from "react";

const MainTextContext = createContext(null);

const originalMainText = "i'm mike";

export function MainTextProvider({ children }) {
	const [mainText, setMainText] = useState(originalMainText);

	return (
		<MainTextContext.Provider
			value={{
				originalMainText: originalMainText,
				mainText: mainText,
				setMainText: setMainText,
			}}
		>
			{children}
		</MainTextContext.Provider>
	);
}

export function useMainTextContext() {
	return useContext(MainTextContext);
}
