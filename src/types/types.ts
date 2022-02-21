export interface ButtonProps {
  type?: "submit" | "button";
  onClick?: () => any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  className?: string;
}
export interface cartItemProps {
  item: ITEMS;
  quantity?: number;
}

export interface CheckoutItemProps {
  item: ITEMS;
  quantity?: number;
}
export interface FormProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
}
export interface CollectionProps {
  item: ITEMS;
}
export interface IForm {
  email: string;
  password: string;
}
export interface info {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface StripeProps {
  price: number;
}
export interface ICartItems {
  item: ITEMS;
  quantity?: number;
}
export interface ICartState {
  hidden: boolean;
  cartItems: ICartItems[];
  totalCount: number;
  totalPrice: number;
}
export interface ISections {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}
export interface ICollection {
  collections: ISHOP_DATA;
}
export interface IUserState {
  currentUser: any;
}

export interface ISHOP_DATA {
  [key: string]: {
    id: number;
    title: string;
    routeName: string;
    items: ITEMS[];
  };
}

export interface ITEMS {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface PreviewCollectionProps {
  title: string;
  items: ITEMS[];
}
