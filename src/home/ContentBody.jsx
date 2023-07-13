import Box from "../common/Box";
import "./ContentBody.scss";

export default function ContentBody() {
	let contentList = ["about", "article", "product", "contact"];
	return (
		<div>
			{(function () {
				const ret = [];
				for (let i = 0; i < contentList.length; i++) {
					ret.push(
						<Box
							title={contentList[i]}
							url={contentList[i]}
							id={contentList[i]}
						/>
					);
				}
				return <div class="content-body">{ret}</div>;
			})()}
		</div>
	);
}
