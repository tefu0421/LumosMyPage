import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HomeRoot from "./HomeRoot";
import AboutRoot from "./AboutRoot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			/>
			<link
				//rel="preload"
				href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100;200;300;400;500&display=block"
				rel="stylesheet"
			/>
		</head>
		<Routes>
			<Route exact path={"/"} element={<HomeRoot />} />
			<Route exact path={"/about"} element={<AboutRoot />} />
		</Routes>
		<Link to="/">Back To Top</Link>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
