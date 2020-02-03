import React from "react";

export default function ArticleSorter() {
  return (
    <div>
      <select id="sortByDropdown">
        <option value="sortBy">Sort By</option>
        <option value="date">Date</option>
        <option value="comments">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <select id="orderDropdown">
        <option value="order">Order</option>
        <option value="ascending">Asc</option>
        <option value="descending">Desc</option>
      </select>
    </div>
  );
}
