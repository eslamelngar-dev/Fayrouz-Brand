import { useParams } from "react-router-dom";
import products from "../../Data/products";
import NavBar from "../../Components/NavBar";
import Footer from "../homePage/Footer";
import AddToCartBtn from "../../Components/AddToCartBtn";

export default function ProductPage() {
  const { id } = useParams(); // رقم المنتج
  const product = products.find(p => p.id.toString() === id);

  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <div>
      <NavBar />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{product.name}</h2>
              <p className="fs-4 text-muted">{product.price}</p>
              <p>{product.description}</p>
              <AddToCartBtn product={product}/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
