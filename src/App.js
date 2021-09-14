import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript 1", body: "Decription" },
		{ id: 2, title: "JavaScript 2", body: "Decription" },
		{ id: 3, title: "JavaScript 3", body: "Decription" },
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<PostList posts={posts} title="Посты про JS" />
		</div>
	);
}

export default App;
