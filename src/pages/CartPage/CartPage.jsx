import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import NavBar from "../../Components/NavBar";
import Footer from "../homePage/Footer";
import { BasketFill, Trash, Plus, Dash } from "react-bootstrap-icons";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useContext(CartContext);

  return (
    <>
      <NavBar/>
      <div className="container py-5" style={{ minHeight: "84.5vh" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">
            <BasketFill className="me-2"/> عربة التسوق
          </h2>
          {cart.length > 0 && (
            <button 
              className="btn btn-outline-danger"
              onClick={clearCart}
            >
              مسح العربة
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <BasketFill size={64} className="text-muted mb-3"/>
            <h4 className="text-muted">العربة فارغة</h4>
            <p className="text-muted">لم تقم بإضافة أي منتجات إلى العربة بعد</p>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-8">
                {cart.map((item) => (
                  <div key={item.id} className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="img-fluid rounded"
                            style={{ height: "150px", objectFit: "cover", width: "100%" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="text-muted mb-2">{item.price}</p>
                          <p className="text-muted mb-0">
                            السعر الإجمالي: {(() => {
                              const price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
                              return `${(price * (item.quantity || 1)).toFixed(0)} جنيه`;
                            })()}
                          </p>
                        </div>
                        <div className="col-md-3 text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                            >
                              <Dash />
                            </button>
                            <span className="fw-bold" style={{ minWidth: "30px" }}>
                              {item.quantity || 1}
                            </span>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                            >
                              <Plus />
                            </button>
                          </div>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash className="me-1"/>
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
                  <div className="card-body">
                    <h5 className="card-title mb-4">ملخص الطلب</h5>
                    <div className="d-flex justify-content-between mb-3">
                      <span>عدد العناصر:</span>
                      <span className="fw-bold">{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>الإجمالي:</span>
                      <span className="fw-bold fs-5 text-primary">
                        {totalPrice.toFixed(0)} جنيه
                      </span>
                    </div>
                    <hr />
                    <button className="btn btn-primary w-100 btn-lg">
                      إتمام الطلب
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}
