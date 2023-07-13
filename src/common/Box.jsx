import "./Box.scss";

export default function Box(props) {
	return (
		<div class="Box" href={props.url}>
			<p>{props.title}</p>
		</div>
	);
}
