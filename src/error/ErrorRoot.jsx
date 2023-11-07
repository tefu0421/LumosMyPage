import Header from "../common/Header";
import "./ErrorRoot.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ErrorRoot() {
	const number = useRef();
	const message = useRef();

	useEffect(() => {
		gsap.from(number.current, {
			y: +100,
			ease: "elastic.out(0.8,0.0)",
			delay: 0.1,
		});
		gsap.to(message.current, {});
	}, []);

	return (
		<html>
			<body>
				<Header />
				<div id="content">
					<div id="number">
						<p ref={number}>404</p>
					</div>
				</div>
				<p id="message">
					<span>page not found</span>
				</p>
			</body>
		</html>
	);
}
