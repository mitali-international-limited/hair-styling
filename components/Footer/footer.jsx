import React from 'react';

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="grid grid-cols-2 paddingLeftRight pt-16 h-3/4">
        <div className="">
          <h3 className="text-white/80">About</h3>
          <p className="text-small text-white/50">
            With one of the largest catalogs of medical, surgical, and
            diagnostic supplies available online, Medex Supply can provide your
            facility with all the medical equipment necessary to ensure a
            healthy, safe, and sterile environment. Our extensive selection, low
            prices, fast shipping, and friendly, knowledgeable customer service
            makes Medex Supply a #1 favorite with universities, hospitals,
            doctors, nurses, schools, laboratories, government agencies, and
            more.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-white/80">Company</h3>
            <ul className="text-white/50 leading-8">
              <li className="hover:text-white hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Authorized Dealer</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Return Policy</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Shipping Policy</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Customer Feedback</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/80">Account</h3>
            <ul className="text-white/50 leading-8">
              <li className="hover:text-white hover:underline">
                <a href="#">Sign In</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Register</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Order Status</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Re Order</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Affiliates Program</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/80">Contact</h3>
            <ul className="text-white/50 leading-8">
              <li className="hover:text-white hover:underline">
                <a href="#">Chat With Us</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">abc@gmail.com</a>
              </li>
              <li className="hover:text-white">
                <a href="#">+880 1234 2343 23</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/80">Forms</h3>
            <ul className="text-white/50 leading-8">
              <li className="hover:text-white hover:underline">
                <a href="#">Credit Application</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Print Order Form</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Suggestions</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Healthcare</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Government</a>
              </li>
              <li className="hover:text-white hover:underline">
                <a href="#">Tax Exempt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-12">
        <div class="container text-center mx-0 my-auto text-white/80">
          All rights reserved &copy; 2023
        </div>
      </div>
    </section>
  );
};

export default Footer;
