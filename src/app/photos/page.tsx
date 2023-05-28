"use client";

import Header from "@/components/Header";
import Link from "next/link";

interface ISubmitProps {
  e: any,
  history: any,
  searchInput: any,
}

export default function Photos() {
  console.log("foi para fotos");

  // const history;
  const handleSubmit = ({e, history, searchInput}: ISubmitProps) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <div>
      <h1>Photos</h1>
      <h3>
        <Link href="/" className="text-sm">Home</Link>
      </h3>

      <div className="container">
        <Header
          handleSubmit={handleSubmit}
          history={history}
        />
      </div>
    </div>
  );
}
