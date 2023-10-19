import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, likes, image, name } = toy

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => onDeleteToy(toy))
  }

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({likes: likes + 1})
    })
    .then(r => r.json())
    .then(updatedToy => onUpdateToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
