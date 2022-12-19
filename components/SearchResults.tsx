import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  addToWishList: (id: number) => void;
};

export function SearchResults({
  totalPrice,
  results,
  addToWishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem key={product.id} product={product} addToWishList={addToWishList} />
        );
      })}
    </div>
  );
}
