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
				</div>
			</body>
		</html>
	);
}
