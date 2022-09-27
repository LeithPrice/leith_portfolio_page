import React from "react";


function Copyright() {
  return (
    <h3 variant="body2" color={"purple"} align="center">
      {"Copyright © Leith Price "}
      {new Date().getFullYear()}
    </h3>
  );
}

const Footer = (props) => {
  return (

 <div>     
    <footer class="text-center text-lg-start bg-light text-muted">
    
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>
     
      
        <div>
          <a href="https://www.facebook.com/leith.price.5" target="_blank"  rel="noreferrer" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.github.com/LeithPrice " target="_blank" rel="noreferrer" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/leithprice" target="_blank" rel="noreferrer" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
       
      </section>
     
     
  
      <section class="">
        <div class="container text-center text-md-start mt-5">
         
          <div class="row mt-3">
         
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          
    
          
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
           
    
      
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
          
    
          
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          
          </div>
         
        </div>
      </section>
     

      <div class="text-center p-4" style={{backgroundcolor: "rgba(0, 0, 0, 0.05)"}}>
    <Copyright />
        <a class="text-reset fw-bold" href="https://www.leithprice.netlify.app/">Leithprice.netlify.app</a>
      </div> 
       
    </footer>
   </div>
  );
}

export default Footer;



/* //     <Card position absolute>
//       <div class="card" bgcolor="blanchedalmond">
//         <h3 variant="h6" align="center" gutterBottom>
//           {props.title}
//         </h3>

//         <h3 variant="subtitle1" align="center" color={"skyblue"}>
//           {props.description}
//         </h3>
//         <Copyright />
//       </div>
//      </Card> */



