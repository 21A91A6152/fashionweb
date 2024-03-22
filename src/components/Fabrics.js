import { Link } from 'react-router-dom';
import logo from '../images/Logo Files/For Web/png/wl.png';
import wa from '../images/whatsapp.png';
import Footer from './footer';
import Aboutus from './Aboutus';
import f1 from '../images/cottonlining.jpeg';
import f2 from '../images/polysterlining.jpeg';
import f3 from '../images/Rayon.jpg';
import f4 from '../images/Net Organza.jpg';
import f5 from '../images/Saree Fall.jpeg';


function Fabrics(){
    return(
        <div className="container-fluid" style={{backgroundColor:"#F8E5E5"}}>
            <div className="row " id='home'>
                <div className="col-12 bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to={`/`} ><img src={logo} alt='logo' style={{height:"50px" ,width:"190px"}}></img></Link>
                      <button className="navbar-toggler" style={{float:'right'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                                <Link to={`/`} className="nav-link fs-5 px-2  " >Home </Link>
                          
                          </li>
                          

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-5 px-2" href="#categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              categories
                            </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#categories">Fabrics</a></li>
                              <li><a className="dropdown-item" href="#categories">Kuchu</a></li>
                              <li><a className="dropdown-item" href="#categories">Threads,beads and laces</a></li>
                               
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
            <div className='row text-center '>
                 
                    <h1 className='fw-bolder my-5'> Fabrics </h1>
                    <div className='card col-md-3 col-sm-6' >
                        <div className='card-header'>
                            <img src={f1} alt=''  style={{height:'200px',width:'300px'}} /> 
                        </div>
                        <div className='card-body'> 
                            <h3>Cotton Lining</h3>
                            <span className='fw-italic'> <del>  &#8377; 349</del> &nbsp;&nbsp;&nbsp;  &#8377;299</span> <br/>
                            <span className='fw-italic text-success'>save 10%</span>
                        </div>
                       
                    </div>
                    <div className='card col-md-3 col-sm-6'>
                        <div className='card-header'>
                            <img src={f2} alt=''  style={{height:'200px',width:'300px'}}/> 
                        </div>
                        <div className='card-body'> 
                            <h3>Polyester Lining</h3>
                            <span className='fw-italic'><del>  &#8377; 349</del> &nbsp;&nbsp;&nbsp; &#8377;299</span> <br/>
                            <span className='fw-italic text-success'>save 10%</span>
                        </div>
             
                    </div>
                    <div className='card col-md-3 col-sm-6'>
                        <div className='card-header'>
                            <img src={f3} alt='' style={{height:'200px',width:'300px'}} /> 
                        </div>
                        <div className='card-body'> 
                            <h3>Rayon</h3>
                            <span className='fw-italic'><del>  &#8377; 349</del> &nbsp;&nbsp;&nbsp;  &#8377;299</span> <br/>
                            <span className='fw-italic text-success'>save 10%</span>
                        </div>
                    </div>
                    <div className='card col-md-3 col-sm-6'>
                        <div className='card-header'>
                            <img src={f4} alt='' style={{height:'200px',width:'300px'}} /> 
                            
                        </div>
                        <div className='card-body'> 
                            <h3>Net Lining</h3>
                            <span className='fw-italic'><del>  &#8377; 349</del> &nbsp;&nbsp;&nbsp;  &#8377;299</span> <br/>
                            <span className='fw-italic text-success'>save 10%</span>
                        </div>
                        
                    </div>
                    <div className='card col-md-3 col-sm-6'>
                        <div className='card-header'>
                            <img src={f5} alt='' style={{height:'200px',width:'300px'}} /> 
                            
                        </div>
                        <div className='card-body'> 
                            <h3>Saree Fall</h3>
                            <span className='fw-italic'><del>  &#8377; 349</del> &nbsp;&nbsp;&nbsp;  &#8377;299</span> <br/>
                            <span className='fw-italic text-success'>save 10%</span>
                        </div>
                        
                    </div>
                  
            </div>

           
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
            <div className='row pt-3' id='contactus'>
                <Footer/>
              </div>
        </div>
    )
}
export default Fabrics;