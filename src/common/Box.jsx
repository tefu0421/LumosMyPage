import "./Box.scss";
import { useNavigate } from "react-router-dom";

export default function Box(props) {
	const navigate = useNavigate();
	return (
		<div
			class="Box"
			onClick={() => {
				navigate(props.url);
			}}
		>
			<p>{props.title}</p>
		</div>
	);
}
