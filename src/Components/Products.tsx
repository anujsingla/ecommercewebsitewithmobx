import { map } from "lodash";
import { Product } from "./Product";

export const Products = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map([1, 2, 3, 4, 5], (p, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
