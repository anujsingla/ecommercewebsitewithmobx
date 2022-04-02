import { map } from "lodash";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../Hooks/useStore";
import { Product } from "./Product";

export const Products = observer(() => {
  const {
    rootStore: { productsStore },
  } = useStore();

  useEffect(() => {
    productsStore.fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map(productsStore.getProducts, (p, index) => (
            <Product product={p} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
});
