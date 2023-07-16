import Header from "../common/Header";
import "./ErrorRoot.scss";

export default function ErrorRoot() {
	return (
		<html>
			<body>
				<div>
					<Header />
					<div>
						<p id="number">
							<span>404</span>
						</p>
						<p id="message">
							<span>page not found</span>
						</p>
					</div>
				</div>
			</body>
		</html>
	);
}
