import React from "react";

// interface ImageProps {
//   url: string;
//   title: string;
// }

const Image = ({ url, title }: any) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Image;