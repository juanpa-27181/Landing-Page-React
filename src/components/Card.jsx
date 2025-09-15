import React from "react";

export default function Card({ title, text, image }) {
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Find out more!
          </a>
        </div>
      </div>
    </div>
  );
}
