import logo from '../images/Logo Files/For Web/png/wl.png';
import "../css/footer.css";
function Footer(){
    return (<div>
        <footer>
            <div class="row">
                <div class="col">
                    <img src={logo} class="logo"/>
                    <p>visit website specifically : discourse intended to give a mental image of something experienced
                        beautiful beyond description
                        gave an accurate description of what he saw</p>
                </div>
                <div class="col">
                    <h3>Office <div class="underline"><span></span></div></h3>
                    <p>ipl road</p>
                    <p>hyd</p>
                    <p> telangana</p>
                    <p class="email-id">kanmani@gmail.com</p>
                    <h4>9999999999</h4>
                </div>
                <div class="col">
                    <h3>Links <div class="underline"><span></span></div></h3>
                    <ul>
                         <li><a href="">Home</a></li>
                         <li><a href="">Services</a></li>
                         <li><a href="">About us</a></li>
                         <li><a href="">Features</a></li>
                         <li><a href="">contact</a></li>

                    </ul>
                </div>
                <div class="col">
                    <h3>Email <div class="underline"><span></span></div></h3>
                    <form>
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Enter Your E-Mail Id" required />
                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div class="social-icons">
                        <i class="fa-brands fa-facebook"></i> 
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <hr/>
            <p class="copyright">website@2024 - all rights reserved</p>
        </footer>
    </div>)
}
export default Footer