import Product from "../models/Product"

type Props = { product: Product }

export default function ProductComponent({ product }: Props) {
    return (
        <article className="card product-item">
            <header className="card__header">
                <h1 className="product__title">{product.title}</h1>
            </header>
            <div className="card__image">
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="card__content">
                <h2 className="product__price">${product.price}</h2>
                <p className="product__description">{product.description}</p>
            </div>
            <div className="card__actions">
                {/* <%- include('../includes/add-to-cart.ejs', {product:product }) %> */}
            </div>
        </article>
    )
}
