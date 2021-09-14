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

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			{posts.length !== 0 ? (
				<PostList remove={removePost} posts={posts} title="Посты про JS" />
			) : (
				<h1 style={{ textAlign: "center" }}> Посты не найдены</h1>
			)}
		</div>
	);
}

export default App;
