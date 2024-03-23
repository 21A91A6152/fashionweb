import logo from '../images/Logo Files/For Web/png/wl.png';
import img from '../images/mainlogo.jpg';
import "../css/footer.css";
import "../css/card.css";
 
import Aboutus from './Aboutus';
import Footer from './footer';
import { Link } from 'react-router-dom';
import kuchu from '../images/kuchu.jpg';
import fabrics from '../images/fabrics.jpeg';
import threads from '../images/threads.jpeg';
import wa from '../images/whatsapp.png';
 
function Home(){
 
    return(
        <div className="container-fluid" style={{backgroundColor:"#F8E5E5 ",margin:"0px",padding:"0px"}}>
            <div className="row " id='home' style={{margin:'0px' ,padding:'0px'}}>
                <div className="col-12 bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to={`/`} ><img src={logo} alt='logo' style={{height:"50px" ,width:"190px"}}></img></Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                          <Link to={`/`}
                                            className="nav-link fs-5 px-2  " >Home </Link>
                          </li>
                          

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-5 px-2" href="#categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              categories
                            </a>
                            <ul className="dropdown-menu">
                              <li> <Link to={`/fabrics`}  className="dropdown-item" >Fabrics </Link> </li>
                              <li> <Link to={`/kuchu`}  className="dropdown-item" >Kuchu </Link> </li>
                              <li> <Link to={`/threads`}  className="dropdown-item" >Threads ,beads and laces </Link> </li>
                               
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link   fs-5 px-2"   href="#aboutus">About us</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link fs-5 px-2" href='#services'>Services</a>
                          </li>
                          <li className="nav-item">
                          <Link to={`/map`}
                                            className="nav-link fs-5 px-2  " >MAP location </Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link fs-5 px-2" href="#contactus">contact us</a>
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


            <div className="row my-3" id='categories'  style={{backgroundColor:"#F8E5E5 ",margin:'0px' ,padding:'0px'}}>
              <div className='col-md-1' style={{margin:'0px',padding:'0px'}}></div>
              <div className='col-md-10 col-sm-12' style={{backgroundColor:"#F8E5E5 ",margin:'0px',padding:'0px'}}>
                <div className="" style={{backgroundColor:"#F8E5E5 "}}>
                  <h1 className='text-dark text-center fw-bolder'>Categories</h1>
                  <div className='row' style={{margin:'0px',padding:'0px'}}>
                   
                    <div className='col-md-4 col-sm-12' style={{margin:'0px',padding:'10px'}} >
                    <Link to={`/fabrics`}>
                      <div className='card my-4 coll' style={{ backgroundColor: "#c39ea0", transition: 'transform 0.3s ease' }}>
                        <div className='card-header text-center mt-3'>
                          <img src={fabrics} alt='fabrics' style={{ height: '200px', width: "280px" }}></img>
                        </div>
                        <div className='card-body'>
                          <h3 className='text-center text-dark' style={{textDecoration:"none"}}>Fabrics</h3>
                        </div>
                      </div>
                    </Link>

                    </div>
                     
                    <div className='col-md-4 col-sm-12' style={{margin:'0px',padding:'10px'}}>
                    <Link to={`/kuchu`}> 
                      <div className='card my-4 coll' style={{backgroundColor:"#c39ea0"}}>
                        <div className='card-header text-center mt-3'>
                          <img src={kuchu} alt='kuchu'style={{height:'200px',width:"280px"}}></img>
                           </div>
                          <div className='card-body'>
                             <h3 className='text-center text-dark' style={{textDecoration:"none"}}>Kuchu</h3>
                          </div>
                      </div>
                      </Link>


                    </div>
                    <div className='col-md-4 col-sm-12' style={{margin:'0px',padding:'10px',}} >
                    <Link to={`/threads`}> 
                      <div className='card my-4 coll' style={{backgroundColor:"#c39ea0"}}>
                        <div className='card-header text-center mt-3'>
                          <img src={threads} alt='threads' style={{height:'200px',width:"280px"}}></img>
                           </div>
                          <div className='card-body'>
                             <h3 className='text-center text-dark' style={{textDecoration:"none"}}>Threads</h3>
                          </div>
                      </div>
                      </Link> 

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
                      <h4 className="text-center fw-bold">Maggam work</h4>
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
                <span className='fs-1'><i className="fa-solid fa-users"></i></span>
                <p className='py-3'>2000</p></div></div>

                <div className='col-md-4 col-sm-12   px-3 py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5 className='pt-2'>Orders Delivered</h5>
                <span className='fs-1'><i className="fa-solid fa-truck"></i></span>
                <p className='py-3'>500+</p></div></div>

                <div className='col-md-4 col-sm-12   px-3  py-3 my-3 text-center'> <div className='bg-light mx-5' style={{borderRadius:"25px"}}>
                <h5 className='pt-2'>Ratings</h5>
                <span className='fs-1'><i className="fa-solid fa-face-smile"></i></span>
                <p className='py-3'>4.5 <i className="fa-solid fa-star"></i></p></div></div>

              </div>
              {/* REVIEWS */}
              
                 
            
                
              
             <div className='row mt-3' style={{margin:"0px",padding:"0px"}}>
                 
                  <h1 className='text-dark fw-bold text-center' > Reviews</h1>
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="row">
                            <div class='card col-md-6 col-sm-12'>
                               
                                <div class="card-header">
                                  <div style={{float:"left"}}> 
                                  <img src={fabrics} alt='kcm' style={{height:"100px",width:"150px"}}  />
                                  </div>
                                  <div style={{float:"left",paddingLeft:"30px"}}>
                                    <h3>Jhon Doe</h3>
                                    <h5>Rajhmundary</h5> 
                                    <p class="pt-1"> <span class="social-block-rating"><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span> </p>
                                  </div>
                                   
                                </div>
                                <div className='card-body' style={{width:"100%"}}>
                                <p class="">"Customer service is very good fabrics quality is also good.satisfied with the work with very reasonable prices " </p>
                                </div>
                          
                            </div>
                            <div class='card col-md-6 col-sm-12'>
                              <div class="card-header">
                                    <div style={{float:"left"}}> 
                                    <img src={fabrics} alt='kcm' style={{height:"100px",width:"150px"}}  />
                                    </div>
                                    <div style={{float:"left",paddingLeft:"30px"}}>
                                      <h3>Jhon Doe</h3>
                                      <h5>Rajhmundary</h5> 
                                      <p class="pt-1"> <span class="social-block-rating"><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span> </p>
                                    </div>
                                    
                                  </div>
                                  <div className='card-body' style={{width:"100%"}}>
                                  <p class="">"wonderful boutique helping us find the perfect dress!  Top notch service, superior quality, and Would highly recommended boutique to anyone!"</p>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class='card col-md-6 col-sm-12'>
                            <div class="card-header">
                                  <div style={{float:"left"}}> 
                                  <img src={threads} alt='kcm' style={{height:"100px",width:"150px"}}  />
                                  </div>
                                  <div style={{float:"left",paddingLeft:"30px"}}>
                                    <h3>Jhon Doe</h3>
                                    <h5>Rajhmundary</h5> 
                                    <p class="pt-1"> <span class="social-block-rating"><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span> </p>
                                  </div>
                                   
                                </div>
                                <div className='card-body' style={{width:"100%"}}>
                                <p class="">"Good boutique for Blouse designs, Saree Ku chu, Maggam work. Good place to work."</p>
                                </div>
                            </div>
                            <div class='card col-md-6 col-sm-12'>
                            <div class="card-header">
                                  <div style={{float:"left"}}> 
                                  <img src={threads} alt='kcm' style={{height:"100px",width:"150px"}}  />
                                  </div>
                                  <div style={{float:"left",paddingLeft:"30px"}}>
                                    <h3>Jhon Doe</h3>
                                    <h5>Rajhmundary</h5> 
                                    <p class="pt-1"> <span class="social-block-rating"><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span> </p>
                                  </div>
                                   
                                </div>
                                <div className='card-body' style={{width:"100%"}}>
                                <p class="">"It's very very good store for cloths material and  nice fitting too andTimely deliver and perfect fitting"</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                
             </div>
             
             {/* FOOTER */}
          
              <div className='row mt-4' id='contactus' style={{margin:"0px",padding:"0px"}}>
                <Footer/>
              </div>
                </div>

           
    )
}
export default Home;