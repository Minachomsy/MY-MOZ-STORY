import minaimg from "./image/image2.jpg"
import minaimge from "./image/image1.jpg"
function footer () {
  return (
    <footer className="bg-white text-dark py-1">
    <div className="container text-center mb-4">
    <h3>Email capture form for updates and promotions</h3>
    <p>Subscibe to our newsletters and stay up to date on features and releases.</p>
    <div className="d-flex justify-content-center">
    <input type="email"className="form-control w-50 me-2"
         placeholder="Enter email address"/>
    <button className="btn btn-primary">Subscibe</button>
    </div>
    </div>
    <div className="container-fluid bg-dark text-white py-5">
    <div className="row">
    <div className="col-md-4">
    <img src={minaimg} alt="simple image"/>
    <h5>Progframs Technology</h5>
    <p>We help businesses succeed in the digital age,through software development,
    providing expert advice,and offering training programs.
    </p>
    </div>
    <div className="col-md-2">
      <h5>Quick links</h5>
      <ul className="list-unstyled">
        <li><a href="#"className="text-light text-decoration-none">Home</a></li>
        
        <li><a href="#"className="text-light text-decoration-none">About</a></li>
        
        <li><a href="#"className="text-light text-decoration-none">services</a></li>
        
        <li><a href="#"className="text-light text-decoration-none">blog</a></li>
      </ul>
    </div>
       <div className="col-md-2">
        <h5>What We Do</h5>
        <ul className="list-unstyled">
          <li><a href="#"className="text-light text-decoration-none">Courses</a></li>
          <li><a href="#"className="text-light text-decoration-none">Bootcamps</a></li>
          <li><a href="#"className="text-light text-decoration-none">Consultation</a></li>
        </ul>
       </div>
       <div className="col-md-2">
       <h5>Other Links</h5>
       <ul className="list-unstyled"><li><a href="#"className="text-light text-decoration-none">FAQ</a></li></ul>
       <ul className="list-unstyled"><li><a href="#"className="text-light text-decoration-none">Privacy Policy</a></li></ul>
       <ul className="list-unstyled"><li><a href="#"className="text-light text-decoration-none">Terms And Condition</a></li></ul>
       </div>
       <div className="col-md-2">
        <h5>Contact Us</h5>
        <p>+234 808 565 5780</p>
        <p><a href="mailto:support@progfams.com.ng"className="text-light text-decoration-none">
          support@progfams.com.ng</a></p>
          <p>Adeniyi Jones,Ikeja,Nigeria</p>
          <img src={minaimge} alt="simple image"/>
          <div>
            <a href="#"className="text-light me-2"><i className="fab fa-linkedin"></i></a>
            <a href="#"className="text-light me-2"><i className="fab fa-twitter"></i></a>
            <a href="#"className="text-light me-2"><i className="fab fa-facebook"></i></a>
          </div>
       </div>
    </div>
    </div>
    </footer>
   ); 
};
export default footer;
