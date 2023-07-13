import "./HomeRoot.scss";
import Header from "../common/Header";
import ContentBody from "./ContentBody";

export default function HomeRoot() {
	return (
		<html>
			<body>
				<div>
					<Header />
					<ContentBody />
					<a href="./about/">link</a>
				</div>
			</body>
		</html>
	);
}
