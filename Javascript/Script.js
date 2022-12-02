// Navbar Coding Start
document.querySelector("header").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg" id="navbar">
<a class="navbar-brand" href="index.html"><img src="Images/Logo_La-Imperial.png" alt=""></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #fff;">
    <span class="navbar-toggler-icon" ></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <a class="nav-link" href="Index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
  <a class="nav-link" href="#">
    Brand
  </a>
  <div class="dropdown-content">
    <a href="Dawlance.html">Dawlance</a>
    <a href="haier.html">Haier</a>
    <a href="orient.html">Orient</a>
    <a href="pel.html">Pel</a>
</div>
  </li>
    <li class="nav-item dropdown">
  <a class="nav-link" href="Categories.html">
    Categories
  </a>
  <div class="dropdown-content">
    <a href="Refrigerator.html">Refrigerator</a>
    <a href="AC.html">Air Conditioners</a>
    <a href="TV.html">LED TV</a>
    <a href="Washingmachine.html">Washing Machine</a>
    <a href="Otherproduct.html">Other Products</a>
</div>
</li>
    <li class="nav-item">
        <a class="nav-link" href="contactus.html">Contact Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="Aboutus.html">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="newComparison.html">Comparison</a>
    </li>
</ul>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" id="searchbox" type="search" placeholder="Search" aria-label="Search" style="width: 300px; font-size:18px; padding:10px;">
      <button class="btn btn-success my-2 my-sm-0" type="submit" onclick="Navigate()"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
</div>
</nav>
`
var search = document.getElementById("searchbox");
        function Navigate(){
            if(search.value == "Haier")
            window.open ( "haier.html");

            else if (search.value == "Dawlance")
            window.open( "Dawlance.html");

            else if (search.value == "Orient")
            window.open( "orient.html");

            else if (search.value == "Pel")
            window.open( "pel.html");

            else if (search.value == "Refrigerator")
            window.open( "Refrigerator.html");

            else if (search.value == "Air Conditioners")
            window.open( "AC.html");

            else if (search.value == "LED TV")
            window.open( "TV.html");

            else if (search.value == "Washing Machine")
            window.open( "Washingmachine.html");
            
            else if (search.value == "Other Products")
            window.open( "Otherproduct.html");

            else {
                alert("Please Enter Correct brand");
            }
            search.value= "";
        }
// Footer Coding Start
document.querySelector("footer").innerHTML = `
<footer id="dk-footer" class="dk-footer">
<div class="container">
    <div class="row">
        <div class="col-md-12 col-lg-4">
            <div class="dk-footer-box-info">
                <a href="index.html" class="footer-logo"><img src="Images/Logo_La-Imperial.png" alt="">
                </a>
                <p class="footer-info-text">
                   We provide different brands products in reasonable price with delivery facility, we convert houses in homes.
                </p>
            <div class="footer-social-link">
                    <h3>Follow us</h3>
                    <ul>
                        <li>
                            <a href="#">
                         <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- End Social link -->
            </div>
            <!-- End Footer info -->
            <div class="footer-awarad">
                <img src="images/icon/best.png" alt="">
                <p>Best Seller of the Year 2020</p>
            </div>
        </div>
        <!-- End Col -->
        <div class="col-md-12 col-lg-8">
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-us">
                        <div class="contact-icon">
                            <i class="fa fa-map-o" aria-hidden="true"></i>
                        </div>
                        <!-- End contact Icon -->
                        <div class="contact-info">
                            <h3>Karachi Pakistan</h3>
                            <p>Electronic Market, Saddar</p>
                        </div>
                        <!-- End Contact Info -->
                    </div>
                    <!-- End Contact Us -->
                </div>
                <!-- End Col -->
                <div class="col-md-6">
                    <div class="contact-us contact-us-last">
                        <div class="contact-icon">
                            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                        </div>
                        <!-- End contact Icon -->
                        <div class="contact-info">
                            <h3>+92 314 3115506</h3>
                            <p>Give us a call</p>
                        </div>
                        <!-- End Contact Info -->
                    </div>
                    <!-- End Contact Us -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Contact Row -->
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="footer-widget footer-left-widget">
                        <div class="section-heading">
                            <h3>Useful Links</h3>
                            <span class="animate-border border-black"></span>
                        </div>
                        <ul>
                            <li>
                                <a href="aboutus.html">About us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Our Team</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="contactus.html">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Faq</a>
                            </li>
                        </ul>
                    </div>
                    <!-- End Footer Widget -->
                </div>
                <!-- End col -->
                <div class="col-md-12 col-lg-6">
                    <div class="footer-widget">
                        <div class="section-heading">
                            <h3>Newsletter</h3>
                            <span class="animate-border border-black"></span>
                        </div>
                        <p>Subscribe us for get updates about our new deals and discounts.</p>
                        <form action="#">
                            <div class="form-row">
                                <div class="col dk-footer-form">
                                <input type="email" name="txtEmail" class="form-control" placeholder="Your Email *" value="" title="Example: **********@gmail.com"/>
                                <button type="submit">
                                        <i class="fa fa-send"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <!-- End form -->
                    </div>
                    <!-- End footer widget -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Row -->
        </div>
        <!-- End Col -->
    </div>
    <!-- End Widget Row -->
</div>
<!-- End Contact Container -->


<div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <span>Copyright &copy 2022, All Right Reserved</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6">
                <div class="copyright-menu">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="contactus.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End col -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End Copyright Container -->
</div>
<!-- End Copyright -->
<!-- Back to top -->
<div id="back-to-top" class="back-to-top">

    <a class="btn btn-dark to-top" title="Back to Top" style="display: block;" href="#slideToTop">
    <i class="fa fa-angle-up"></i>
    </a>

</div>
<!-- End Back to top -->
</footer>
`

    // optional
//     $('#blogCarousel').carousel({
//         interval: 5000
// });

let imgChange = (e) => {
    document.querySelector('.bg_image').style.backgroundImage = `url(${e})`;
}


// let countDate = new Date('june 1, 2021 00:00:00').getTime();

// function CountDown(){
// let now = new Date().getTime();
// gap = countDate - now;

// let second = 1000;
// let minutes = second + 60;
// let hours = minutes + 60;
// let day = hours + 24;

// let d = Math.floor(gap / (day));
// let h = Math.floor((gap % (day)) / (hours));
// let m = Math.floor((gap % (hours)) / (minutes));
// let s = Math.floor((gap % (minutes)) / (second));

// document.getElementById('day').innerText = d
// document.getElementById('hours').innerText = h
// document.getElementById('minutes').innerText = m
// document.getElementById('second').innerText = s

// }

// setInterval(function(){
// CountDown()
// },1000)
