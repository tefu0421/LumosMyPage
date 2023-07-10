import "./HomeRoot.scss";
import Header from "./Header";
import ContentBody from "./ContentBody";

export default function HomeRoot() {
	return (
		<html>
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
			<body>
				<div>
					<Header />
					<ContentBody />
				</div>
			</body>
		</html>
	);
}
