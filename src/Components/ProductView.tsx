import { find } from "lodash";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../Hooks/useStore";
import { IProducts } from "../store/productsStore";

export const ProductView = observer(() => {
  const {
    rootStore: { productsStore },
  } = useStore();
  const { productId } = useParams();
  const product = find(
    productsStore.getProducts,
    (p) => p.id.toString() === productId
  ) as IProducts;
  const onClickBuyNow = () => {};
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">{product?.title}</h2>
        <p className="lead">{product?.description}</p>
        <div>
          <button
            type="button"
            onClick={onClickBuyNow}
            className="btn btn-primary"
          >
            BUY NOW
          </button>
        </div>
      </div>
      <div className="col-md-5 order-md-1">
        <img
          width="400"
          height="400"
          src={product?.image}
          alt="Product images"
        />
      </div>
    </div>
  );
});
