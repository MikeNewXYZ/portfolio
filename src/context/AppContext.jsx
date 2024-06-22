import { createContext, useState } from "react";

const DEFAULT_HOME_TITLE = "i'm mike";

export const HomeTitleContext = createContext(DEFAULT_HOME_TITLE);

export default function AppContext({ children }) {
	const [homeTitle, setHomeTitle] = useState(DEFAULT_HOME_TITLE);

	const resetHomeTitle = () => setHomeTitle(DEFAULT_HOME_TITLE);

	return (
		<HomeTitleContext.Provider value={{ homeTitle, setHomeTitle, resetHomeTitle }}>
			{children}
		</HomeTitleContext.Provider>
	);
}
