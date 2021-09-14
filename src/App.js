import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript 1", body: "Decription" },
		{ id: 2, title: "JavaScript 2", body: "Decription" },
		{ id: 3, title: "JavaScript 3", body: "Decription" },
	]);

	return (
		<div className="App">
			<form>
				<MyInput type="text" placeholder="Название поста" />
				<MyInput type="text" placeholder="Описание поста" />
				<MyButton disabled>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title="Посты про JS" />
		</div>
	);
}

export default App;
