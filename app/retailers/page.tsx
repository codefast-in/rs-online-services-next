"use client";

import {title} from "@/components/primitives";
import React, {useEffect, useState} from "react";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {
  BadgeRounded,
  FingerprintRounded,
  HomeRounded,
  LocationCityRounded,
  MailRounded,
  PersonRounded,
  PhoneIphoneRounded,
  StoreMallDirectoryRounded,
  StoreRounded,
} from "@mui/icons-material";

export default function RetailersPage() {
  const [editable, setEditable] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [firmName, setFirmName] = useState("");
  const [firmAdd, setFirmAdd] = useState("");
  const [homeAdd, setHomeAdd] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [panCard, setPanCard] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [panNo, setpanNo] = useState("");
  const [aadharNO, setaadharNO] = useState("");

  return (
    <div className=" shadow-none mb-0  grid place-items-center gap-10 w-screen px-5 sm:px-10 md:px-20  xl:px-52">
      <div className="w-full ">
        <h2 className="mb-5 font-semibold text-lg">Details</h2>
        <form className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border py-3 px-4 rounded-lg  ">
          <Input
            type="text"
            label="First Name"
            value={firstName}
            labelPlacement="outside"
            onChange={(e) => setFirstName(e.target.value)}
            startContent={<PersonRounded />}
            isRequired
          />
          <Input
            type="text"
            label="Middil Name"
            value={middleName}
            labelPlacement="outside"
            onChange={(e) => setMiddleName(e.target.value)}
            startContent={<PersonRounded />}
          />
          <Input
            type="text"
            label="Last Name"
            value={lastName}
            labelPlacement="outside"
            onChange={(e) => setLastName(e.target.value)}
            startContent={<PersonRounded />}
            isRequired
          />
          <Input
            type="text"
            label="Firm Name"
            value={firmName}
            labelPlacement="outside"
            onChange={(e) => setFirmName(e.target.value)}
            startContent={<StoreRounded />}
            isRequired
          />

          <Input
            type="phone"
            label="Mobile No."
            placeholder={mobileNumber}
            value={mobileNumber}
            labelPlacement="outside"
            startContent={<PhoneIphoneRounded />}
            onChange={(e) => setMobileNumber(e.target.value)}
            isRequired
          />
          <Input
            type="email"
            label="Email address"
            placeholder={email}
            value={email}
            labelPlacement="outside"
            onChange={(e) => setEmail(e.target.value)}
            startContent={<MailRounded />}
            isRequired
          />

          <Input
            type="text"
            label="Pan No"
            placeholder={panNo}
            value={panNo}
            labelPlacement="outside"
            onChange={(e) => setpanNo(e.target.value)}
            startContent={<BadgeRounded />}
            isRequired
          />

          <Input
            type="text"
            label="Aadhar No"
            placeholder={aadharNO}
            value={aadharNO}
            labelPlacement="outside"
            onChange={(e) => setaadharNO(e.target.value)}
            startContent={<FingerprintRounded />}
            isRequired
          />
        </form>
      </div>
      <div className="w-full ">
        <h2 className="mb-5 font-semibold text-lg">Firm Address Details</h2>

        <form className="grid gap-5  md:grid-cols-1 border py-3 px-4 rounded-lg ">
          <Textarea
            label="Firm Address"
            labelPlacement="outside"
            value={firmAdd}
            onChange={(e) => setFirmAdd(e.target.value)}
            startContent={<StoreMallDirectoryRounded />}
            isRequired
          />
          <div className="flex justify-between sm:flex-col md:flex-row gap-5">
            <Input
              label="City"
              labelPlacement="outside"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              startContent={<StoreMallDirectoryRounded />}
              isRequired
            />
            <Input
              label="Pin Code"
              labelPlacement="outside"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              startContent={<StoreMallDirectoryRounded />}
              isRequired
            />
          </div>
          <div className="flex justify-between sm:flex-col md:flex-row gap-5">
            <Input
              label="District"
              labelPlacement="outside"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              startContent={<StoreMallDirectoryRounded />}
              isRequired
            />
            <Input
              label="State"
              labelPlacement="outside"
              value={state}
              onChange={(e) => setState(e.target.value)}
              startContent={<StoreMallDirectoryRounded />}
              isRequired
            />
          </div>
        </form>
      </div>
      <div className="w-full ">
        <h2 className="mb-5 font-semibold text-lg">
          Permanent Address Details
        </h2>

        <form className="grid gap-5  md:grid-cols-1 border py-3 px-4 rounded-lg ">
          <Textarea
            label="Permanent Address"
            labelPlacement="outside"
            value={firmAdd}
            onChange={(e) => setFirmAdd(e.target.value)}
            startContent={<HomeRounded />}
            isRequired
          />
          <div className="flex justify-between sm:flex-col md:flex-row gap-5">
            <Input
              label="City"
              labelPlacement="outside"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              isRequired
              startContent={<HomeRounded />}
            />
            <Input
              label="Pin Code"
              labelPlacement="outside"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              isRequired
              startContent={<HomeRounded />}
            />
          </div>
          <div className="flex justify-between sm:flex-col md:flex-row gap-5">
            <Input
              label="District"
              labelPlacement="outside"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              isRequired
              startContent={<HomeRounded />}
            />
            <Input
              label="State"
              labelPlacement="outside"
              value={state}
              onChange={(e) => setState(e.target.value)}
              isRequired
              startContent={<HomeRounded />}
            />
          </div>
        </form>
      </div>

      <Button
        // type="button"
        // onClick={() => (setEditable(!editable), console.log("pressed"))}
        color="success"
        className="w-full  mt-5 text-white">
        Submit
      </Button>
    </div>
  );
}
