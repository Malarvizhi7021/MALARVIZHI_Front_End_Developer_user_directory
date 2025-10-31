import React from "react";

export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <img
        src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${user.name}`}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}
