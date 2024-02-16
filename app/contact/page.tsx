// import { title } from "@/components/primitives";

// export default function ContactPage() {
// 	return (
// 		<div>
// 			<h1 className={title()}>Contact</h1>
// 		</div>
// 	);
// }

import {Input, Textarea} from "@nextui-org/input";

import {Button} from "@nextui-org/button";
import Link from "next/link";
import {ApartmentRounded} from "@mui/icons-material";
import {Card, CardBody} from "@nextui-org/card";

export default function Component() {
  return (
    <div className="flex flex-col justify-center gap-10 text-center w-screen px-5 sm:px-10 md:px-20 lg:px-48 ">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We'll get back to you as soon as we can.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 ">
        <div className="grid grid-cols-2 gap-10">
          <Card data-aos="fade" data-aos-delay="200">
            <CardBody className="felx flex-row justify-around items-center">
              <ApartmentRounded className="text-5xl w-[40%]" />
              <div className="w-[60%]">
                <h3 className="font-semibold">Address</h3>
                <p>123 Street Name, Raisen, 464551, </p>
                <p>Madhaya Paradesh, India</p>
              </div>
            </CardBody>
          </Card>

          <Card data-aos="fade" data-aos-delay="300">
            <CardBody className="felx flex-row justify-around items-center">
              <ApartmentRounded className="text-5xl w-[40%]" />
              <div className="w-[60%]">
                <h3 className="font-semibold">Call Us</h3>
                <p>+91 7869814684</p>
                <p>+91 7869814684</p>
              </div>
            </CardBody>
          </Card>

          <Card data-aos="fade" data-aos-delay="400">
            <CardBody className="felx flex-row justify-around items-center">
              <ApartmentRounded className="text-5xl w-[40%]" />
              <div className="w-[60%]">
                <h3 className="font-semibold">Email Us</h3>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="a9c0c7cfc6e9ccd1c8c4d9c5cc87cac6c4">
                    [email&#160;protected]
                  </a>
                </p>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="5c3f3332283d3f281c39243d312c3039723f3331">
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </CardBody>
          </Card>

          <Card data-aos="fade" data-aos-delay="500">
            <CardBody className="felx flex-row justify-around items-center">
              <ApartmentRounded className="text-5xl w-[40%]" />
              <div className="w-[60%]">
                <h3 className="font-semibold">Open Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00AM - 05:00PM</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <div className="space-y-4">
            <div className="space-y-4 grid grid-cols-1  text-start gap-5">
              <div className="grid grid-cols-2 gap-5">
                <Input type="text" id="name" label="Name" placeholder="Enter your name"  labelPlacement="outside" />

                <Input
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
				  labelPlacement="outside"
				 
                />
              </div>

              <Input
			  type="text"
                id="subject"
                label="Subject"
                placeholder="Enter the subject"
				labelPlacement="outside"
				className="mt-5"
              />

              <Textarea
                minRows={5}
                id="message"
                placeholder="Enter your message"
                label="Message"
				labelPlacement="outside"
              />

              <Button
                color="success"
                variant="solid"
                className="font-semibold text-white ">
                Send message
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Follow us on Social Media</h2>
            <div className="grid grid-cols-3 gap-4">
              <Link
                className="flex items-center justify-center p-3 rounded-full bg-gray-100 dark:bg-gray-800"
                href="#">
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                className="flex items-center justify-center p-3 rounded-full bg-gray-100 dark:bg-gray-800"
                href="#">
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                className="flex items-center justify-center p-3 rounded-full bg-gray-100 dark:bg-gray-800"
                href="#">
                <InstagramIcon className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
