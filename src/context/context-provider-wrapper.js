import { MainTextProvider } from "./main-text-context/main-text-context";

export default function ContextProviderWrapper({ children }) {
	return <MainTextProvider>{children}</MainTextProvider>;
}
