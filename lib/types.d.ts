type CollectionType = {
  _id: string;
  title: string;
  products: ProductType[];
  image: string;
  starting?: string;
  description?: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: string[];
  category: string;
  collections: string[];
  tags: string[];
  price: number;
  cost: number;
  sizes: string[];
  colors: string[];
  createdAt: string;
  updatedAt: string;
};

type UserType = {
  firstName?: string;
  lastName?: string;
  email: string;
  username: string;
  wishlist: string[];
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  products: [OrderItemType];
  shippingRate: string;
  totalAmount: number;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
  _id: string;
};
