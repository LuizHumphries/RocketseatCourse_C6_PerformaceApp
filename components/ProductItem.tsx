import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import dynamic from "next/dynamic"; // must be used in next for SSR
//import { AddProductToWishlist } from "./AddProductToWishlist";
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist").then((mod) => mod.AddProductToWishlist);
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

type ProductItemProps = {
  product: {
    id: number;
    priceFormatted: string;
    title: string;
  };
  addToWishList: (id: number) => void;
};

function ProductItemComponent({ product, addToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Add to favorites</button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddtoWishlist={() => addToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
