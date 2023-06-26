import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<style>
			@import
			url('https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@200&display=swap')
		</style>
		<Root />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
