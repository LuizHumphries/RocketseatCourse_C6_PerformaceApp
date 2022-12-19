export interface AddProductToWishlistProps {
  onAddtoWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddtoWishlist,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddtoWishlist}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
}
