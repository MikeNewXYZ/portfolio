import React from "react";
import ReactDOM from "react-dom/client";
import AppContext from "@context/AppContext";
import PageRouter from "@/pages/PageRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppContext>
			<PageRouter />
		</AppContext>
	</React.StrictMode>,
);
