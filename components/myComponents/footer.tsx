import React from "react";
import Link from "next/link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
// import {Image} from "@nextui-org/image";
import Image from "next/image";
const ios = require("@/assets/appStor/play-store.png");
const android = require("@/assets/appStor/apple-store.png");

function Footer() {
  return (
    <div>
      <section className="py-5 border border-separate bg-[#f8f9fa] w-screen items-center justify-center flex ">
        <div className="gap-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-7xl p-4">
          
            <div className="footer-section1  p-2 rounded-lg shadow-sm">
              <h5 className="mb-4 uppercase font-bold">Contact Info</h5>
              <div className="address mb-5">
                <h6 className="mb-0 uppercase font-bold">Address</h6>
                <p className="mb-0 font-semibold">
                  123 Street Name, Raisen,Madhaya Paradesh
                </p>
              </div>
              <div className="phone mb-5">
                <h6 className="mb-0 uppercase font-bold">Phone</h6>
                {/* <p className="mb-0 font-semibold">Toll Free (123) 472-796</p> */}
                <p className="mb-0 font-semibold">Mobile : +91 7869814684</p>
              </div>
              <div className="email mb-5">
                <h6 className="mb-0 uppercase font-bold">Email</h6>
                <p className="mb-0 font-semibold">supyarmeena11@gmail.com</p>
              </div>
              <div className="working-days mb-5">
                <h6 className="mb-0  uppercase font-bold">WORKING DAYS</h6>
                <p className="mb-0 font-semibold">24/7</p>
              </div>
            </div>
          
         
            <div className="footer-section2  p-2 rounded-lg shadow-sm">
              <h5 className="mb-4 uppercase font-bold">Categories</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Jeans
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    T-Shirts
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Sports
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Shirts & Tops
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Clogs & Mules
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Sunglasses
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />Bags & Wallets
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Sneakers & Athletic
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/" style={{textDecoration: "none"}}>
                    <ChevronRightRoundedIcon />
                    Electronis
                  </Link>
                </li>
                
              </ul>
            </div>
         
         
            <div className="footer-section3  p-2 rounded-lg shadow-sm">
              <h5 className="mb-4 uppercase font-bold">Popular Tags</h5>
              <div className="tags-box flex flex-wrap gap-2">
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1 ">
                Electronis
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost"  className="m-1">
                News
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1">
               Headphones
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1">
                 Goverment Services
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1">
                 Laptops
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1">
                 Pan Card
                </Button>
                <Button 
                as={Link} 
                href="/" variant="ghost" className="m-1">
                 Adhar Card
                </Button>
              
               
              </div>
            </div>
          
         
            <div className="footer-section4  p-2 rounded-lg shadow-sm">
              <h5 className="mb-4 uppercase font-bold">Stay informed</h5>
              <div className="subscribe">
                <Input type="email" placeholder="Enter your email" size="sm" className="border rounded-lg"/>

                <Button
                  href="/"
                  variant="solid"
                  color="success"
                  className="mt-3 block w-full text-white">
                  Subscribe
                </Button>
                <p className="mt-3 mb-0">
                  Subscribe to our newsletter to receive early discount offers,
                  updates and new products info.
                </p>
              </div>
              <div className="download-app mt-3">
                <h6 className="mb-3 uppercase font-bold">Download our app</h6>
                <div className="flex items-center justify-center gap-2">
                  <Link href="/">
                    <Image
                   
                      src={ios}
                      //  shadow="sm"
                      //  radius="lg"
                      className=" object-cover"
                      width={1000}
                      height={1000}
                      alt="Play stor"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src={android}
                      //  shadow="sm"
                      //  radius="lg"
                      className="object-cover"
                      width={1000}
                      height={1000}
                      alt="Play stor"
                    />
                  </Link>
                </div>
              </div>
            </div>
         
        </div>
        {/* <!--end row--> */}
      </section>

      <section className="footer-strip text-center py-3 border-top positon-absolute bottom-0 w-screen items-center justify-center flex">
        <div className=" flex items-center justify-center">
          <p className="mb-0 font-semibold">
            Copyright © 2022. All right reserved. Design and Devloped By <Link href="https://beangates.com"> @Beangate IT Solutions</Link>
          </p>

          {/* <div className="payment-icon">
            <div className="row row-cols-auto g-2 justify-content-end">
              <div className="col">
                <img src="/images/icons/visa.png" alt="" />
              </div>
              <div className="col">
                <img src="/images/icons/paypal.png" alt="" />
              </div>
              <div className="col">
                <img src="/images/icons/mastercard.png" alt="" />
              </div>
              <div className="col">
                <img src="/images/icons/american-express.png" alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
