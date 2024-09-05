import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../utils/methods/products";
import Alert from "../Alert";
import CardSkelaton from "../Skelatons/CardSkelaton";

const ProductContainer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <div className="flex flex-wrap justify-center gap-y-4">
      {isLoading &&
        Array(12)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-3">
              <CardSkelaton />
            </div>
          ))}

      {!isLoading && isError && <Alert type={"warning"} />}
      {!isLoading &&
        !isError &&
        data.data.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
    </div>
  );
};

export default ProductContainer;
