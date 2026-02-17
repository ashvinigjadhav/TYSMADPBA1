import React from 'react'
import { Link } from 'react-router-dom'
import ProductsPage from './ProductsPage'

export default function Home(){
  return (
    <>
      <section className="page-section hero bg-light pt-5 pb-5" id="home">
        <div className="container-fluid container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 hero-content p-4 p-md-5">
              <h2 className="display-3 fw-bold text-dark">Timeless <span className="text-primary">Elegance Crafted for You</span></h2>
              <p className="lead text-dark">Discover Our Exquisite Jewellery Collections</p>
              <Link to="/menu" className="btn btn-primary btn-lg mt-3">Shop Now <i className="fas fa-arrow-right ms-2"></i></Link>
            </div>
            <div className="col-lg-6 col-md-12 hero-image text-center pt-4 pt-lg-0">
              <img src="https://kalashjewellers.com/wp-content/uploads/2024/11/DALL%C2%B7E-2023-12-02-17.02.02-Slider-image-for-a-high-end-jewelry-brand-showcasing-a-premium-gold-mangalsutra.-The-design-should-be-eye-catching-and-exude-luxury.-The-mangalsutra-i-1024x585.png" alt="Diamond Ring" className="img-fluid rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="features container-fluid container-xxl mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center py-4 px-3 bg-white shadow-sm rounded-3">
          <div className="col feature">
            <i className="fas fa-award fa-3x text-primary mb-3"></i>
            <h3 className="h5 text-dark">Handcrafted Quality</h3>
            <p className="text-dark">Meticulously made with passion and precision</p>
          </div>
          <div className="col feature">
            <i className="fas fa-medal fa-3x text-primary mb-3"></i>
            <h3 className="h5 text-dark">Certified Gems</h3>
            <p className="text-dark">Only the finest, ethically sourced gemstones</p>
          </div>
          <div className="col feature">
            <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
            <h3 className="h5 text-dark">Secure Delivery</h3>
            <p className="text-dark">Insured and reliable shipping to your door</p>
          </div>
        </div>
      </section>

      <section className="gallery container-fluid g-0 my-5">
        <div className="row g-0">
          <div className="col-lg-3 col-md-6 gallery-item"><img src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg" alt="Model" className="img-fluid w-100 h-100 object-fit-cover" /></div>
          <div className="col-lg-3 col-md-6 gallery-item"><img src="https://jokerandwitch.com/cdn/shop/products/JWJ1868_2_1080x.jpg" alt="Earrings" className="img-fluid w-100 h-100 object-fit-cover" /></div>
          <div className="col-lg-3 col-md-6 gallery-item"><img src="https://estele.co/cdn/shop/products/1_22095d71-d5a8-4dfb-bc0d-aeebd8227da6.jpg" alt="Necklace" className="img-fluid w-100 h-100 object-fit-cover" /></div>
          <div className="col-lg-3 col-md-6 gallery-item"><img src="https://img.freepik.com/premium-photo/jewelry-diamond-rings-necklaces-show-luxury-retail-store-window-display-showcase_293060-5598.jpg" alt="Showcase" className="img-fluid w-100 h-100 object-fit-cover" /></div>
        </div>
      </section>

      <section className="page-section menu container-fluid container-xxl py-5" id="menu">
        <div className="section-header mb-5 text-center">
          <h2 className="display-4 fw-bold text-dark">Our Collections</h2>
          <p className="lead text-dark">Find the Perfect Piece to Tell Your Story</p>
        </div>
        <ProductsPage preview />
      </section>
    </>
  )
}
