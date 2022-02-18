import { ICartItems } from "./cartReducer";

export const addItemsToCart = (
  cartItems: ICartItems[],
  cartItemToAdd: ICartItems
): ICartItems[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItemToAdd.item.id === cartItem.item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.item.id === cartItemToAdd.item.id
        ? {
            ...cartItem,
            quantity: cartItem?.quantity
              ? (cartItem.quantity += 1)
              : (cartItem.quantity = 2),
          }
        : cartItem
    );
  }
  return [...cartItems, cartItemToAdd];
};
