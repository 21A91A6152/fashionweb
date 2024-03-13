import { Link } from 'react-router-dom';
import logo from '../images/Logo Files/For Web/png/wl.png';
import Footer from './footer';

function Map(){
    return(
        <div className="container-fluid" style={{backgroundColor:"#e8f9fd"}}>
            <div className="row " id='home'>
                <div className="col-12 bg-dark">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                    <Link to={`/`} ><img src={logo} alt='logo' style={{height:"50px" ,width:"190px"}}></img></Link>
                      <button class="navbar-toggler" style={{float:'right'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                                <Link to={`/`} class="nav-link fs-5 px-2  " >Home </Link>
                          
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
            <div className='row'>
                <div className='col-md-6'>
                    <h1>location</h1>
                </div>
                <div className='col-md-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.6108703239861!2d78.30181549999999!3d17.5129086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d026c974857%3A0x8b5e28ec4bcb9330!2sKanyamani%20Fashions!5e0!3m2!1sen!2sin!4v1710311000862!5m2!1sen!2sin" width="100%" height="600" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
                </div>
            </div>
            <div className='row' id='contactus'>
                <Footer/>
              </div>
        </div>
    )
}
export default Map;