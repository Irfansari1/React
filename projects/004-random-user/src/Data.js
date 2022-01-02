import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const Data = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <article className="followers">
      <div className="container">
        {users.map((user) => {
          const { id, login, avatar_url, html_url, repos_url } = user;
          return (
            <div className="card" key={id}>
              <img src={avatar_url} alt={login} />
              <div className="card-over">
                <h3>{login}</h3>
                <h4>{repos_url}</h4>
                <a href={html_url} className="btn">
                  view profile
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Data;
