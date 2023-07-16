import "./Header.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	return (
		<div class="header">
			<h1 onClick={() => navigate("/")}>
				<span>TeFu0421</span>
			</h1>
		</div>
	);
}
