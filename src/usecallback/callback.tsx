import { useCallback, useEffect, useState } from "react";
import { ALL_BOOKS } from "./data";
import SearchBox from "../components/SearchBox";

export default function UseCallback() {
  const [books, setBooks] = useState(ALL_BOOKS);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      console.log(books[0]);

      const filteredBooks = ALL_BOOKS.filter((book) =>
        book.title
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );

      setBooks(filteredBooks);
    },
    [books]
  );
  if (books.length == 0) {
    throw new Error("Code ramro Lekh");
  }
  const handleShuffle = () => {
    setBooks(books.slice().sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      {/* Shuffle Books & Search */}
      <div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={handleShuffle}>Shuffle Books</button>

          <SearchBox onChange={handleSearch} />
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <li key={book.id} className="rounded-md border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
