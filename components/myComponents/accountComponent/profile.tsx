import React, {useEffect, useState} from "react";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

function Profile() {
  const [editable, setEditable] = useState(false);
  const [fullName, setFullName] = useState("Supyar Meena");
  const [mobileNumber, setMobileNumber] = useState("7869814684");
  const [email, setEmail] = useState("youremail@gmail.com");
  const [password, setPassword] = useState("yourpassword");
  const [newPasword, setNewPasword] = useState("YourNewPassword");
  const [workAdd, setWorkAdd] = useState(
    "123 Street Name, Raisen, 464551 Madhya Pradesh, India"
  );
  const [homeAdd, setHomeAdd] = useState(
    "123 Street Name, Raisen, 464551 Madhya Pradesh, India"
  );

  useEffect(() => {}, [editable]);

  if (editable) {
    return (
      <div className=" shadow-none mb-0  grid place-items-center gap-10">
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Personal Details</h2>
          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-3 border py-3 px-4 rounded-lg  ">
            <Input
              type="text"
              label="Full Name"
              // placeholder={fullName}
              value={fullName}
              labelPlacement="outside"
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <Input
              type="phone"
              label="Mobile No."
              placeholder={mobileNumber}
              value={mobileNumber}
              labelPlacement="outside"
              startContent={<span>+91</span>}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <Input
              type="email"
              label="Email address"
              placeholder={email}
              value={email}
              labelPlacement="outside"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              label="Current Password"
              placeholder={password}
              value={password}
              labelPlacement="outside"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Input
              type="password"
              label="New Password"
              placeholder={newPasword}
              value={newPasword}
              labelPlacement="outside"
              onChange={(e) => setNewPasword(e.target.value)}
              required
            />

            {/* <Input
              type="password"
              label="Confirm New Password"
              placeholder={newPasword}
              value={newPasword}
              labelPlacement="outside"
              required
            /> */}
          </form>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Address Details</h2>

          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-2 border py-3 px-4 rounded-lg ">
            <Textarea
              label="Shop/ Work"
              labelPlacement="outside"
              value={workAdd}
              onChange={(e) => setWorkAdd(e.target.value)}
              required
            />
            <Textarea
              label="Home"
              labelPlacement="outside"
              value={homeAdd}
              onChange={(e) => setHomeAdd(e.target.value)}
              required
            />
            <Button
              type="button"
              color="success"
              className="w-full md:w-3/5 text-white">
              Add New Address
            </Button>
          </form>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Payment Methods</h2>

          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-2 border py-3 px-4 rounded-lg ">
            <Textarea
              label="Shop/ Work"
              labelPlacement="outside"
              value="123 Street Name, Raisen, 464551 Madhaya Paradesh, India"
              readOnly
            />
            <Textarea
              label="Home"
              labelPlacement="outside"
              value="123 Street Name, Raisen, 464551 Madhaya Paradesh, India"
              readOnly
            />
            <Button
              type="button"
              color="success"
              className="w-full md:w-3/5 text-white">
              Add New Method
            </Button>
          </form>
        </div>
        <Button
          // type="button"
          onClick={() => (setEditable(!editable), console.log("pressed"))}
          color="success"
          className="w-full md:w-3/5 mt-5 text-white">
          Save Details
        </Button>
      </div>
    );
  } else {
    return (
      <div className=" shadow-none mb-0  grid place-items-center gap-10">
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Personal Details</h2>
          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-3 border py-3 px-4 rounded-lg  ">
            <Input
              type="text"
              label="Full Name"
              placeholder="Your Full Name"
              value={fullName}
              labelPlacement="outside"
              readOnly
            />

            <Input
              type="phone"
              label="Mobile No."
              placeholder="Your Mobile No."
              value={mobileNumber}
              startContent={<span>+91</span>}
              labelPlacement="outside"
              readOnly
            />
            <Input
              type="email"
              label="Email address"
              placeholder="example@gmail.com"
              value={email}
              labelPlacement="outside"
              readOnly
            />

            <Input
              type="password"
              label="Current Password"
              placeholder="Madison"
              value={password}
              labelPlacement="outside"
              readOnly
            />
          </form>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Address Details</h2>

          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-2 border py-3 px-4 rounded-lg ">
            <Textarea
              label="Shop/ Work"
              labelPlacement="outside"
              value={workAdd}
              readOnly
            />
            <Textarea
              label="Home"
              labelPlacement="outside"
              value={homeAdd}
              readOnly
            />
            <Button
              type="button"
              color="success"
              className="w-full md:w-3/5 text-white">
              Add New Address
            </Button>
          </form>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="mb-5 font-semibold text-lg">Payment Methods</h2>

          <form className="grid gap-10 sm:grid-cols-3 md:grid-cols-2 border py-3 px-4 rounded-lg ">
            <Textarea
              label="Shop/ Work"
              labelPlacement="outside"
              value="123 Street Name, Raisen, 464551 Madhaya Paradesh, India"
              readOnly
            />
            <Textarea
              label="Home"
              labelPlacement="outside"
              value="123 Street Name, Raisen, 464551 Madhaya Paradesh, India"
              readOnly
            />
            <Button
              type="button"
              color="success"
              className="w-full md:w-3/5 text-white">
              Add New Method
            </Button>
          </form>
        </div>
        <Button
          // type="button"
          color="success"
          onClick={() => (setEditable(!editable), console.log("pressed"))}
          className="w-full md:w-3/5 mt-5 text-white">
          Edit Details
        </Button>
      </div>
    );
  }
}

export default Profile;
