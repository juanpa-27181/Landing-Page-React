import React from "react";
import Card from "./Card";

export default function CardGroup() {
  const cards = [
    {
      title: "Card Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/500/325?random=1",
    },
    {
      title: "Card Title 2",
      text: "Pellentesque habitant morbi tristique senectus et netus.",
      image: "https://picsum.photos/500/325?random=2",
    },
    {
      title: "Card Title 3",
      text: "Suspendisse potenti. Nullam ac tortor vitae purus faucibus.",
      image: "https://picsum.photos/500/325?random=3",
    },
    {
      title: "Card Title 4",
      text: "Donec ac odio tempor orci dapibus ultrices in iaculis.",
      image: "https://picsum.photos/500/325?random=4",
    },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
