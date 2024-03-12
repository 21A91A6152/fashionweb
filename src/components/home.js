import logo from '../images/Logo Files/For Web/png/wl.png';
import img from '../images/mainlogo.jpg';
import "../css/footer.css";
import Aboutus from './Aboutus';
import Footer from './footer';
 
function Home(){
    return(
        <div className="container-fluid" style={{backgroundColor:"#e8f9fd"}}>
            <div className="row">
                <div className="col-12 bg-dark">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#"><img src={logo} alt='logo' style={{height:"50px" ,width:"200px"}}></img></a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a class="nav-link active fs-5 px-2" aria-current="page" href="#">Home</a>
                          </li>
                          

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fs-5 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              categories
                            </a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li>
                                <hr class="dropdown-divider"/>
                              </li>
                              <li><a class="dropdown-item" href="#">another</a></li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link   fs-5 px-2"   href="#">About us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link fs-5 px-2">Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link fs-5 px-2" href="#">contact us</a>
                          </li>
                        </ul>
                      
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            <div className="row ">
                <div className="col-12">
                 <img src={img} style={{width:"100%",height:"600px"}}></img>
                </div>
            </div>
  
            <div className="row">
                <div className="col-12">
                <h1>categories</h1>
                </div>
            </div>
            <div className='row bg-light' >
              <div className='col-12 px-5 py-5'>
                <Aboutus />
              </div>
            </div>
            <div className="row my-2 p-4 bg-light"  >
                <div className='col-md-3 col-sm-12 mt-5' >
                  <div className='card p-3 '>
                      <h6>Design work</h6>
                     
                      <p>   Kanyamani Fashions boasts a comprehensive collection of the latest designs, offering both computerized and manual customization options to fulfill diverse design preferences and needs. </p>
                  </div>
                   
                </div>
                <div className='col-md-3 col-sm-12 mt-5'>
                  <div className='card p-3'>
                      <h6>Tailor Services</h6>
                      <p>We provide tailor services who have lot of experince and have creative ideas for new designs </p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12 mt-5'>
                  <div className='card p-3'>
                      <h6>Tailor Services</h6>
                      <p>We provide tailor services who have lot of experince and have creative ideas for new designs </p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12 mt-5'>
                  <div className='card p-3'>
                      <h6>Tailor Services</h6>
                      <p>We provide tailor services who have lot of experince and have creative ideas for new designs </p>
                  </div>
                </div>
            </div>
             <div className='row bg-primary'>
                <div className='col-md-4 col-sm-12  px-5 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5>Happy clients</h5>
                <span className='fs-1'><i class="fa-solid fa-users"></i></span>
                <p className='py-3'>2000</p></div></div>

                <div className='col-md-4 col-sm-12   px-5 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5>Orders Delivered</h5>
                <span className='fs-1'><i class="fa-solid fa-truck"></i></span>
                <p className='py-3'>500+</p></div></div>

                <div className='col-md-4 col-sm-12   px-5 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5>Ratings</h5>
                <span className='fs-1'><i class="fa-solid fa-face-smile"></i></span>
                <p className='py-3'>4.5 <i class="fa-solid fa-star"></i></p></div></div>


                
             </div>
             
             
          
              <div className='row'>
                <Footer/>
              </div>
                </div>

           
    )
}
export default Home;