import logo from '../images/Logo Files/For Web/png/wl.png';
import img from '../images/mainlogo.jpg';
import "../css/footer.css";
import Aboutus from './Aboutus';
import Footer from './footer';
import { Link } from 'react-router-dom';
import kuchu from '../images/kuchu.jpg';
import fabrics from '../images/fabrics.jpg';
import threads from '../images/threads.jpg';
import wa from '../images/whatsapp.png';
 
function Home(){
 
    return(
        <div className="container-fluid" style={{backgroundColor:"#F8E5E5 ",margin:"0px",padding:"0px"}}>
            <div className="row " id='home' style={{margin:'0px' ,padding:'0px'}}>
                <div className="col-12 bg-dark">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                    <Link to={`/`} ><img src={logo} alt='logo' style={{height:"50px" ,width:"190px"}}></img></Link>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                          <Link to={`/`}
                                            class="nav-link fs-5 px-2  " >Home </Link>
                          </li>
                          

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle fs-5 px-2" href="#categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              categories
                            </a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#categories">Action</a></li>
                              <li><a class="dropdown-item" href="#categories">Another action</a></li>
                              <li>
                                <hr class="dropdown-divider"/>
                              </li>
                              <li><a class="dropdown-item" href="#categories">another</a></li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link   fs-5 px-2"   href="#aboutus">About us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link fs-5 px-2" href='#services'>Services</a>
                          </li>
                          <li class="nav-item">
                          <Link to={`/map`}
                                            class="nav-link fs-5 px-2  " >MAP location </Link>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link fs-5 px-2" href="#contactus">contact us</a>
                          </li>
                        </ul>
                      
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            <div className="row " style={{margin:'0px' ,padding:'0px'}}>
                <div className="col-12">
                 <img src={img}  alt='logo' style={{width:"100%",height:"600px"}}></img>
                </div>
            </div>
  

            {/* categories */}


            <div className="row my-3" id='categories' style={{margin:'0px',padding:'0px'}}>
              <div className='col-md-1' style={{margin:'0px',padding:'0px'}}></div>
              <div className='col-md-10 col-sm-12' style={{margin:'0px',padding:'0px'}}>
                <div className="card">
                  <h1 className='text-danger text-center'>Categories</h1>
                  <div className='row' >

                    <div className='col-md-3 col-sm-12'>
                      <div className='card'>
                        <div className='card-header'><img src={kuchu} alt="logo" style={{height:'100px'}}></img></div>
                      </div>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                      <div className='card'>
                        <div className='card-header'><img src={fabrics} alt="logo" style={{height:'100px'}}></img></div>
                      </div>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                      <div className='card'>
                        <div className='card-header'><img src={threads} alt="logo" style={{height:'100px',width:"100%"}}></img></div>
                      </div>
                    </div>

                     
                  </div>
                </div>
              </div>
              <div className='col-md-1' style={{margin:'0px',padding:'0px'}}></div>
            </div>

            {/* ABOUT US */}


            <div className='row bg-light' id='aboutus' style={{backgroundColor:"#F8E5E5 ",margin:'0px' ,padding:'0px'}} >
              <div className='col-md-1' style={{backgroundColor:"#F8E5E5 "}}></div>
              <div className='col-md-10 col-sm-12 py-2' style={{backgroundColor:"#F8E5E5 "}}>
                <Aboutus />
              </div>
              <div className='col-md-1' style={{backgroundColor:"#F8E5E5 "}}  ></div>
            </div>

            {/* whatsapp */}
             
            <div className='row' style={{margin:"0px",padding:"0px"}}>
               <a href='https://wa.me/9951924041'><img src={wa} alt='logo' style={{height:'75px',width:'75px',position:"fixed",bottom:'20px' ,right:'10px',zIndex:"1"}}></img></a>
            </div>

            {/* SERVICES */}


            <div className="row my-2 p-4  " id='services' style={{backgroundColor:"#F8E5E5",margin:'0px' ,padding:'0px' }} >
              <h1 className='text-dark fw-bold text-center'>Services</h1>
                <div className='col-md-3 col-sm-12 mt-5 seer'  >
                  <div className='card  services p-3 ' >
                      <h4 className="text-center fw-bold">Design work</h4>
                      <p>   Kanyamani Fashions boasts a comprehensive collection of the latest designs, offering both computerized and manual customization options to fulfill diverse design preferences and needs. </p>
                  </div>
                   
                </div>
                <div className='col-md-3 col-sm-12 mt-5 seer' >
                  <div className='card services p-3'>
                      <h4 className="text-center fw-bold">maggam work</h4>
                      <p>We have experinced workers who have lot of creative ideas with different styles and also design as per your order </p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12 mt-5'>
                  <div className='card services p-3'>
                      <h4 className="text-center fw-bold">Order Delivery</h4>
                      <p>We deliver your products to your Address if you purchase large quantity and price included with delivery charges</p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12 mt-5'>
                  <div className='card services p-3'>
                      <h4 className="text-center fw-bold">Tailor Services</h4>
                      <p>We provide tailor services who have lot of experince and have creative ideas for new designs </p>
                  </div>
                </div>
            </div>

            {/* STATASTICS */}

             <div className='row' style={{backgroundColor:"#c39ea0",borderRadius:"30px" ,margin:'0px' ,padding:'0px'}}>
                <div className='col-md-4 col-sm-12  px-3 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5 className='pt-2'>Happy clients</h5>
                <span className='fs-1'><i class="fa-solid fa-users"></i></span>
                <p className='py-3'>2000</p></div></div>

                <div className='col-md-4 col-sm-12   px-3 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5 className='pt-2'>Orders Delivered</h5>
                <span className='fs-1'><i class="fa-solid fa-truck"></i></span>
                <p className='py-3'>500+</p></div></div>

                <div className='col-md-4 col-sm-12   px-3  py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5 className='pt-2'>Ratings</h5>
                <span className='fs-1'><i class="fa-solid fa-face-smile"></i></span>
                <p className='py-3'>4.5 <i class="fa-solid fa-star"></i></p></div></div>

              </div>
              {/* REVIEWS */}
                
              
             <div className='row mt-3' style={{margin:"0px",padding:"0px"}}>
                <div className='col-12'>
                  <h1 className='text-dark fw-bold text-center' > Reviews</h1>
                </div>

             </div>
             
             {/* FOOTER */}
          
              <div className='row' id='contactus' style={{margin:"0px",padding:"0px"}}>
                <Footer/>
              </div>
                </div>

           
    )
}
export default Home;