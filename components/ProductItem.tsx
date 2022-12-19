import { memo } from "react";

type ProductItemProps = {
  product: {
    id: number;
    priceFormatted: string;
    title: string;
  };
  addToWishList: (id: number) => void;
};

function ProductItemComponent({ product, addToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => addToWishList(product.id)}>Add to wishlist</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
