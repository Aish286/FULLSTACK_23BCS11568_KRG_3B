import React, { useState } from "react";
import "./app.css";  
export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body })
    });

    if (res.ok) {
      setMessage("Post submitted successfully!");
      setTitle("");
      setBody("");
    } else {
      setMessage("Error submitting post");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}
