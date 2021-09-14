import React from "react";

const PostItem = (props) => {
	return (
		<div>
			<div className="post">
				<div className="port_content">
					<strong>
						{props.number}. {props.post.title}
					</strong>
					<div>{props.post.body}</div>
				</div>
				<div className="port__btns">
					<button>Удалить</button>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
