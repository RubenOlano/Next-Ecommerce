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

export const clearItemsFromCart = (
  cartItems: ICartItems[],
  cartItemToRemove: ICartItems
): ICartItems[] => {
  return cartItems.filter((item) => item.item.id !== cartItemToRemove.item.id);
};

export const removeItemFromCart = (
  cartItems: ICartItems[],
  cartItemToRemove: ICartItems
): ICartItems[] => {
  const existingCartItem = cartItems.find(
    ({ item }) => item.id === cartItemToRemove.item.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(({ item }) => item.id !== cartItemToRemove.item.id);
  }
  return cartItems.map((item) =>
    item.item.id === cartItemToRemove.item.id
      ? { ...item, quantity: item.quantity ? item.quantity - 1 : 0 }
      : item
  );
};
