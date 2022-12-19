import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

type Results = {
  totalPrice: number;
  data: any[];
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    const product = data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });
    const totalPrice = data.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    setResults({ totalPrice, data: product });
  }

  async function addToWishList(id: number) {
    console.log(id);
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch} onChange={(e) => setSearch(e.target.value)}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        addToWishList={addToWishList}
      />
    </div>
  );
}
