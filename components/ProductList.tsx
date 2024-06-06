import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  // const products = await getProducts();
  const products: ProductType[] = [
    {
      _id: "1",
      title: "Classic Aviator Sunglasses",
      description:
        "Stylish and timeless, these aviator sunglasses are perfect for any occasion.",
      media: [
        "/images/products/0.jpg",
        // "https://example.com/images/aviator2.jpg",
      ],
      category: "Sunglasses",
      collections: [
        // "Summer 2024",
        "Classic",
      ],
      tags: ["aviator", "sunglasses", "classic", "unisex"],
      price: 79.99,
      cost: 30.0,
      sizes: ["Medium", "Large"],
      colors: ["Gold", "Silver", "Black"],
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z",
    },
    {
      _id: "2",
      title: "Retro Round Glasses",
      description:
        "Bring back the vintage vibe with these retro round glasses.",
      media: ["/images/products/1.jpg", "/images/products/2.jpg"],
      category: "Eyeglasses",
      collections: ["Vintage", "Retro"],
      tags: ["round", "eyeglasses", "vintage", "retro"],
      price: 49.99,
      cost: 20.0,
      sizes: ["Small", "Medium"],
      colors: ["Brown", "Black", "Tortoise"],
      createdAt: "2024-01-16T10:00:00Z",
      updatedAt: "2024-01-16T10:00:00Z",
    },
    {
      _id: "3",
      title: "Sport Performance Sunglasses",
      description:
        "High-performance sunglasses designed for outdoor activities.",
      media: ["/images/products/3.jpg", "/images/products/4.jpg"],
      category: "Sunglasses",
      collections: ["Sport", "Active"],
      tags: ["sport", "performance", "sunglasses", "active"],
      price: 99.99,
      cost: 40.0,
      sizes: ["Medium", "Large"],
      colors: ["Red", "Blue", "Black"],
      createdAt: "2024-01-17T10:00:00Z",
      updatedAt: "2024-01-17T10:00:00Z",
    },
    {
      _id: "4",
      title: "Blue Light Blocking Glasses",
      description:
        "Protect your eyes from digital strain with these blue light blocking glasses.",
      media: ["/images/products/5.jpg", "/images/products/6.jpg"],
      category: "Eyeglasses",
      collections: ["Health", "Office"],
      tags: ["blue light", "eyeglasses", "health", "office"],
      price: 59.99,
      cost: 25.0,
      sizes: ["Small", "Medium", "Large"],
      colors: ["Black", "Gray", "Transparent"],
      createdAt: "2024-01-18T10:00:00Z",
      updatedAt: "2024-01-18T10:00:00Z",
    },
    {
      _id: "5",
      title: "Polarized Fishing Sunglasses",
      description:
        "Enhance your fishing experience with these polarized sunglasses.",
      media: ["/images/products/7.jpg", "/images/products/8.jpg"],
      category: "Sunglasses",
      collections: ["Outdoor", "Fishing"],
      tags: ["polarized", "sunglasses", "fishing", "outdoor"],
      price: 89.99,
      cost: 35.0,
      sizes: ["Medium", "Large"],
      colors: ["Green", "Black", "Blue"],
      createdAt: "2024-01-19T10:00:00Z",
      updatedAt: "2024-01-19T10:00:00Z",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
