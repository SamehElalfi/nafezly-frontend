import React from "react";
import { AiFillStar } from "react-icons/ai";

/**
 * Create a list of stars based on the number of stars passed in
 */
export function RatingStars({ stars = 5 }) {
  let StartComponent = [];
  for (let i = 0; i < stars; i++) {
    StartComponent.push(<AiFillStar className="text-yellow-300" />);
  }

  return <div className="flex">{StartComponent}</div>;
}
