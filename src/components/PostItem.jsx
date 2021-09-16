import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
	const router = useHistory();
	return (
		<div>
			<div className="post">
				<div className="port_content">
					<strong>
						{props.post.id}. {props.post.title}
					</strong>
					<div>{props.post.body}</div>
				</div>
				<div className="port__btns">
					<MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
						Открыть
					</MyButton>
				</div>
				<div className="port__btns">
					<MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
