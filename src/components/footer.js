import logo from '../images/Logo Files/For Web/png/l1.png';
import "../css/footer.css";
function Footer(){
    return (<div style={{margin:"0px", padding:"0px"}}>
        <footer>
            <div class="row" style={{margin:"0px", padding:"0px"}}>
                <div class="col-md-3 col-sm-12 px-5 mt-5">
                    <img src={logo} class="logo" alt="logo" />
                    <p>Kanyamani Fashions offers a diverse range of women's designer wear, fabrics, and accessories, specializing in intricate embroidery and designer sarees. Their extensive selection includes silk, cotton, and polyester fabrics, along with a variety of threads and embellishments for tailored creations.</p>
                </div>
                <div class="col-md-3 col-sm-12 px-5 mt-5"> 
                    <h3 className='mb-2'><u > Address :</u> </h3>
                    <p>Ground Floor, Akhil Complex, H.No 13-0/1 ,
                     Beeramguda Main Rd, near Monday Market, beside SLV Ayyangar Bakery, Shirdi Sai Colony </p>
                    <p> Hyderabad, Telangana 502032</p>
                    <span>Email : kanyamanifashions@gmail.com</span><br/>
                    <span>Phone no : +91 9951924041</span>
                     
                </div>
                <div class="col-md-2 col-sm-12 px-5 mt-5  ">
                    <h3 className='mb-2'><u> Links :</u>  </h3>
                    <ul style={{margin:"0px", padding:"0px"}}>
                         <li><a href="#home">Home</a></li>
                         <li><a href="#services">Services</a></li>
                         <li><a href="#aboutus">About us</a></li>
                         <li><a href="#categories">Features</a></li>
                         <li><a href="#contact">contact</a></li>

                    </ul>
                </div>
                <div class="col-md-3 col-sm-12 px-5 mt-5">
                    <h3 className='mb-2'><u> Email :</u> </h3>
                    <form>
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Enter Your E-Mail Id" required />
                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div class="social-icons">
                        <i class="fa-brands fa-facebook"></i> 
                        <i class="fa-brands fa-x-twitter"></i>
                         <a href='https://wa.me/9951924041'><i class="fa-brands fa-whatsapp"></i></a>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <hr/>
            <p class="copyright">kanyamanifashions@2024 - all rights reserved</p>
        </footer>
    </div>
    )
}
export default Footer