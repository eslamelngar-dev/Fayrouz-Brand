import NavBar from "../../Components/NavBar";
import Footer from "../homePage/Footer";
import { Instagram, Facebook } from "react-bootstrap-icons";
import './ContactPage.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactPage(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return(
    <div>
      <NavBar />

      <section className="py-5 contact-section" style={{ minHeight: "70vh" }}>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card p-5 shadow-lg rounded-4 text-center " 
          style={{ maxWidth: "600px" }}
          data-aos="fade-down"
          >
            <h2 className="fw-bold mb-4">تواصل معنا</h2>
            <p className="lead mb-2">لأي استفسارات أو دعم، يمكنك مراسلتنا على:</p>
            <p className="fw-semibold mb-4">contact@Fayroz.com</p>

            <p className="lead mb-3">تابعنا على وسائل التواصل الاجتماعي:</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="btn ">
                <Instagram className="social instagram"/>
              </a>
              <a href="#" className="btn ">
                <Facebook className="social facebook"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}