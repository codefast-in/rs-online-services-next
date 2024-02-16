"use client";

import React, {useState} from "react";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
function Wallet() {
  const [Money, setMoney] = useState(100);
  return (
    <div className="shadow-none mb-0  grid place-items-center gap-10 w-screen px-5 sm:px-10 md:px-20  xl:px-52">
      <div className=" border  rounded-lg  py-3 px-4 w-full md:w-3/5 ">
        <div className="row">
          <h5 className="font-bold">Total Wallet Balance</h5>
        </div>
        <div className="row  ">
          <div className="col-11 font-bold ">&#8377; 500.00</div>
          <div className="col-1"></div>
        </div>
        <div className="my-3 px-0">
          <h6 className="font-bold"> Add Mony to Wallet</h6>

          <div className="col-12 my-3">
            <Input
              startContent={
                <span className="font-bold" id="addon-wrapping">
                  &#8377;
                </span>
              }
              size="sm"
              type="number"
              className="form-control"
              value={Money.toLocaleString()}
              aria-label="amount"
              aria-describedby="addon-wrapping"
              onChange={(e) => setMoney(Number(e.target.value))}
            />

            <div className="my-4 p-0 ">
              <Button
                href="javascript:;"
                variant="solid"
                color="success"
                className=" text-white w-full  rounded-3 ">
                Proceed To add {Money}
              </Button>
            </div>
          </div>
        </div>
        <Accordion variant="splitted" isCompact className="w-full  ">
          <AccordionItem key="1" aria-label="View History" title="View History">
            <div className="flex gap-5 flex-col">
              <div className="flex items-center justify-between">
                <div className="  text-green-600 fw-bold">+500</div>
                <div className=" text-black ">
                  {day}/{month}/{year}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className=" text-danger fw-bold">-250</div>
                <div className=" text-green ">
                  {day}/{month}/{year}
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Wallet;
