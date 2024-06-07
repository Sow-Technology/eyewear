import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  // const collections = await getCollections();
  const collections = [
    {
      _id: "women",
      title: "Women",
      products: 5,
      image: "/images/products/7.jpg",
      starting: "$149.80",
    },
    {
      _id: "men",
      title: "Men",
      products: 5,
      image: "/images/products/8.jpg",
      starting: "$159.80",
    },
    {
      _id: "teens",
      title: "Teens",
      products: 5,
      image: "/images/products/9.jpg",
      starting: "$149.80",
    },
    {
      _id: "Celebs",
      title: "Celebs",
      products: 5,
      image: "/images/products/4.jpg",
      starting: "$149.80",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold font-bold ">Shop by Category</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No Category found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="flex flex-col rounded-lg bg-gray-100/40 border-2 border-gray-300/40"
            >
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={300}
                height={200}
                className="rounded-t-lg cursor-pointer"
              />
              <div className="px-3 pb-5">
                {" "}
                <h3 className="font-semibold mt-4">{collection.title}</h3>
                <p>Starting from&nbsp;{collection.starting}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
