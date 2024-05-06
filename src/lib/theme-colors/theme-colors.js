import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";
import daisyColors from "daisyui/src/theming/themes";

const twConfig = resolveConfig(tailwindConfig);
const theme = twConfig.daisyui.themes[0];

export default daisyColors[theme];
