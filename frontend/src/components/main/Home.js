import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
  <div data-draggable="true" className="" style={{ position: "relative" }}>
    {/**/}
    {/**/}
    <section
      draggable="false"

      className="overflow-hidden pt-0"
      data-v-271253ee=""
    >
      <section className="mb-10 overflow-hidden">
        {/* Background image */}
        <div
          className="px-4 py-5 px-md-5 text-center bg-image"
          style={{
            backgroundImage:
              `url("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Chrome_BlogHeader_Extensions.png")`,
            height: 500,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundColor: "rgba(0, 0, 0, 0)"
          }}
          aria-controls="#picker-editor"
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-10">
                  <div className="text-white pb-5">
                    <h1 className="my-md-5 mb-4 px-5 display-3 fw-bold ls-tight">
                      <span>Custom Browser Extension</span> <br />
                      <span className="">for your needs</span>
                    </h1>
                    <NavLink
                      className="btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 me-md-2"
                      to="/main/login"
                      role="button"
                      aria-controls="#picker-editor"
                    >
                      Get started
                    </NavLink>
                    <a
                      className="btn btn-link btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 text-white"
                      style={{ backgroundColor: "transparent" }}
                      href="#learn-more"
                      role="button"
                      aria-controls="#picker-editor"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            height: 30,
            marginTop: "-30px",
            transform: "scale(2)",
            transformOrigin: "top center",
            color: "#fff"
          }}
        >
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </section>
  </div>
  <div data-draggable="true" className="" style={{ position: "relative" }}>
    <section draggable="false" className="container pt-5" data-v-271253ee="" id="learn-more">
      <section className="mb-10">
        <h2 className="fw-bold mb-5 text-center">Latest articles</h2>
        <div className="row gx-lg-5 mb-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/bb.jpg"
              className="w-100 shadow-4-strong rounded-4 mb-4"
              alt=""
              aria-controls="#picker-editor"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold">Extension</h3>
            <div className="mb-2 text-danger small">
              <i
                className="fas fa-money-bill me-2"
                aria-controls="#picker-editor"
              />
              <span>Business</span>
            </div>
            <p className="text-muted">
            A Chrome extension is a small software program that extends the functionality of the Google Chrome web browser.
             It is designed to enhance and customize the browsing experience by adding new features and capabilities.
            </p>
            <p className="text-muted">
            
            </p>
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              aria-controls="#picker-editor"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
              className="w-100 shadow-4-strong rounded-4 mb-4"
              alt=""
              aria-controls="#picker-editor"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold">what is need of chrome extension?</h3>
            <div className="mb-2 text-primary small">
              <i
                className="fas fa-money-bill me-2"
                aria-controls="#picker-editor"
              />
              <span>Art</span>
            </div>
            <p className="text-muted">
            The need for Chrome extensions arises from the desire to personalize and enhance the browsing experience by adding specific features and functionalities,
             such as productivity tools, ad-blocking, security enhancements, language assistance, social media management, web development aids, content aggregation,
              e-commerce assistance, and entertainment enhancements. Chrome extensions cater to diverse user needs, allowing individuals to customize their browser,
             improve productivity, streamline tasks, and tailor their online activities to suit their preferences and requirements.
            </p>
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              aria-controls="#picker-editor"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="row gx-lg-5 mb-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/079.jpg"
              className="w-100 shadow-4-strong rounded-4 mb-4"
              alt=""
              aria-controls="#picker-editor"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold">how chrome extension help to improve performance? </h3>
            <div className="mb-2 text-warning small">
              <i
                className="fas fa-money-bill me-2"
                aria-controls="#picker-editor"
              />
              <span>Business</span>
            </div>
            <p className="text-muted">
            Chrome extensions can improve performance by optimizing system resources, blocking ads and unnecessary content, implementing caching and preloading techniques,
             monitoring and optimizing scripts and resources, managing tabs and background processes, and offering performance tweaking options. By utilizing these capabilities,
              Chrome extensions contribute to faster page load times, reduced resource consumption,
             and a smoother browsing experience, enhancing overall performance for users.
            </p>
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              aria-controls="#picker-editor"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
    </section>
    {/**/}
  </div>
  <div data-draggable="true" className="" style={{ position: "relative" }}>
    {/**/}
    {/**/}
    <section draggable="false" className="container pt-5" data-v-271253ee="">
      <section className="mb-10 text-center">
        <div className="d-flex justify-content-center">
          <div className="text-center" style={{ maxWidth: 700 }}>
            <h2 className="fw-bold mb-4 text-center">
              <span className="me-2">Why is it so</span>
              <u className="text-primary">great?</u>
            </h2>
            <p className="text-muted mb-5">
              Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
              Molestias ullam provident vitae error aliquam dolorum temporibus?
              Doloremque, quasi
            </p>
          </div>
        </div>
        <div className="row gx-lg-5">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
              <i
                className="fas fa-headset fa-lg text-white fa-fw"
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="fw-bold mb-3">Support 24/7</h5>
            <p className="text-muted mb-0">
              Laudantium totam quas cumque pariatur at doloremque hic quos quia
              eius. Reiciendis optio minus mollitia rerum labore
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
              <i
                className="fas fa-shield-alt fa-lg text-white fa-fw"
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="fw-bold mb-3">Safe and solid</h5>
            <p className="text-muted mb-0">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
              aspernatur odio soluta, quisquam dolore animi
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
              <i
                className="fas fa-shipping-fast fa-lg text-white fa-fw"
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="fw-bold mb-3">Extremely fast</h5>
            <p className="text-muted mb-0">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
              <i
                className="fas fa-chart-pie fa-lg text-white fa-fw"
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="fw-bold mb-3">Live analytics</h5>
            <p className="text-muted mb-0">
              Illum doloremque ea, blanditiis sed dolor laborum praesentium
              maxime sint, consectetur atque ipsum ab adipisci
            </p>
          </div>
        </div>
      </section>
    </section>
    {/**/}
  </div>
  <div data-draggable="true" className="" style={{ position: "relative" }}>
    {/**/}
    {/**/}
    <section draggable="false" className="container pt-5" data-v-271253ee="">
      <section className="mb-10 text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8">
            <h2 className="fw-bold mb-5">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
                alt=""
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="mb-3">Maria Smantha</h5>
            <h6 className="text-primary mb-3">Web Developer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </span>
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
                alt=""
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <h6 className="text-primary mb-3">Graphic Designer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              <span>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </span>
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
                alt=""
                aria-controls="#picker-editor"
              />
            </div>
            <h5 className="mb-3">John Smith</h5>
            <h6 className="text-primary mb-3">Marketing Specialist</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              <span>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </span>
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
    {/**/}
  </div>
  <div
    data-draggable="true"
    className=""
    style={{ position: "relative" }}
    draggable="false"
  >
    {/**/}
    {/**/}
    <section draggable="false" className="container pt-5" data-v-271253ee="">
      <section className="mb-10 text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
              <i
                className="fas fa-envelope fa-lg text-white fa-fw"
                aria-controls="#picker-editor"
              />
            </div>
            <h2 className="fw-bold mb-4">Subscribe to the newsletter</h2>
            <p className="text-muted mb-4">
              We will write rarely and only high-quality content.
            </p>
            <div className="d-md-flex flex-row text-center">
              <div className="form-outline flex-fill me-1 mb-4 mb-md-0">
                <input
                  type="email"
                  id="formControlEmail0"
                  className="form-control form-control-lg"
                />
                <label
                  className="form-label"
                  htmlFor="formControlEmail0"
                  style={{ marginLeft: 0 }}
                >
                  Enter your email
                </label>
                <div className="form-notch">
                  <div className="form-notch-leading" style={{ width: 9 }} />
                  <div className="form-notch-middle" style={{ width: 100 }} />
                  <div className="form-notch-trailing" />
                </div>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg ms-md-2"
                aria-controls="#picker-editor"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
    {/**/}
  </div>
</div>

  );
};

export default Home;
