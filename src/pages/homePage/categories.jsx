import categories from "../../Data/Categories";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Categories(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []); 

  return(
    <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">التصنيفات</h2>
            <p className="text-muted">اختار الستايل اللي يناسبك</p>
          </div>
          <div className="row g-4">
            {categories.map((cat, i) => (
              <div className="col-md-4" key={i} data-aos="fade-up">
                <div className="card border-0 shadow-sm h-100">
                  <img 
                  src={cat.image} 
                  className="card-img-top img-fluid"
                  style={{height: "350px", objectFit: "cover"}}
                  alt={cat.name}/>
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold">{cat.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}