import products from "../../Data/products";
import NavBar from "../../Components/NavBar";
import Footer from "../homePage/Footer";
import { Link } from "react-router-dom";
import "./Productpage.css";
import AddToCartBtn from "../../Components/AddToCartBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function ProductsPage() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <>
      <main className="page-wrapper">
        <NavBar />
        <section className="product-section page-content py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">جميع المنتجات</h2>
              <p className="text-muted">اكتشف كل منتجاتنا الجديدة والمتنوعة</p>
            </div>
            <div className="row g-4">
              {products.map((product) => (
                <div className="col-md-4" key={product.id} data-aos="fade-up">
                  <Link to={`/products/${product.id}`} className="text-decoration-none">
                    <div className="product-card card h-100 border-0 shadow-sm">
                      <img
                        src={product.image}
                        className="card-img-top img-fluid"
                        style={{ height: "350px", objectFit: "cover" }}
                        alt={product.name}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="text-muted">{product.price}</p>
                        <AddToCartBtn product={product}/>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
