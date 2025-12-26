import { Link } from "react-router-dom"
import backgroundImage from '../../assets/Images/homepage-background.jpg'

export default function NavBar(){
  return(
    <section className="vh-100 d-flex align-items-center text-white" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 bg-dark bg-opacity-75 p-5 rounded-4">
              <h1 className="display-4 fw-bold">ستايلك… هويتك</h1>
              <p className="lead">اكتشف أحدث صيحات الموضة بجودة عالية وتصميم عصري.</p>
              <Link to="/products">
              <button className="btn btn-light btn-lg rounded-pill px-5" href="">تسوق الآن</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}