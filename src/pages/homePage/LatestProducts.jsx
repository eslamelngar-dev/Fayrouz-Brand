import { Link } from "react-router-dom"
import products from "../../Data/products"
import AddToCartBtn from "../../Components/AddToCartBtn"

export default function LatestProducts() {

  return(
    <section className="py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">أحدث المنتجات</h2>
        <p className="text-muted">وصلنا جديد</p>
      </div>
      <div className="row g-4">{
        products.slice(0,3).map((product, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 border-0 shadow-sm">
              <Link to={`/products/${product.id}`} className="product-card text-decoration-none">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "350px", objectFit: "cover" }}
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">{product.name}</h5>
                  <p className="text-muted">{product.price}</p>
                </div>
              </Link>
              <div className="card-body text-center pt-0">
                <AddToCartBtn product={product} className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
