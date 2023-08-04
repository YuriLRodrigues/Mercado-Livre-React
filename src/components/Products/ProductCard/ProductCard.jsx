import { BsFillCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import { useCart } from 'react-use-cart'

const ProductCard = ({ prod }) => {

  const {addItem} = useCart()
  return (
    <article className="product__item">
      <img
        src={prod.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt=""
        className="card__image"
      />
      <div className="card__info">
        <h4 className="card__title">{prod.title}</h4>
        <p className="card__price">{formatCurrency(prod.price)}</p>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={() => addItem(prod)}
      >
        <BsFillCartPlusFill />
      </button>
    </article>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  prod: propTypes.shape({}),
}.isRequired;
