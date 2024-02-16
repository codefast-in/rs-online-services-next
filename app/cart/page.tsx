import React from "react";
import {Divider} from "@nextui-org/divider";
import {products} from "@/Data";
import {Checkbox} from "@nextui-org/checkbox";
import {Image} from "@nextui-org/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import {
  AddRounded,
  DeleteRounded,
  PlusOneRounded,
  RemoveRounded,
} from "@mui/icons-material";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";

const Cart = () => {
  return (
    <>
      <div className="w-full px-0 md:px-20">
        <div className="px-5 py-2">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        </div>
        <Divider />
        <div className="flex justify-between gap-10  ">
          <div className="w-[80%]">
            {products.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex  items-stretch gap-5 my-10 shadow-lg p-5 rounded-lg border">
                <Checkbox
                  className="w-[10%]"
                  defaultSelected
                  color="success"
                  classNames={{
                    label: "text-small ",
                    icon: "text-white",
                  }}
                />

                <Image
                  isZoomed
                  src={item.thumbnail}
                  height={1000}
                  width={1000}
                  alt={item.title}
                  className="object-cover aspect-square h-44 w-44 shadow-sm border  "
                />

                <div className="flex items-start justify-between flex-col w-1/2 ">
                  <div className="flex flex-col">
                    <h2 className="text-start font-semibold text-2xl">
                      {item.title}
                    </h2>

                    <h3 className="text-start font-semibold text-lg text-default-500">
                      {item.description}
                    </h3>

                    <span className="font-semibold">Brand: {item.brand}</span>
                    <span
                      className={
                        item.stock
                          ? "text-start text-success text-lg"
                          : "text-start text-danger text-lg"
                      }>
                      {item.stock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="gap-2 flex">
                    <ButtonGroup size="sm" variant="ghost">
                      <Button isIconOnly>
                        <RemoveRounded />
                      </Button>
                      <Button isIconOnly>1</Button>
                      <Button isIconOnly>
                        <AddRounded />
                      </Button>
                    </ButtonGroup>
                    <Button size="sm" color="danger" variant="ghost" isIconOnly>
                      <DeleteRounded />
                    </Button>
                    <Button
                      size="sm"
                      color="success"
                      variant="solid"
                      className="text-white">
                      Bay Now
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-end place-content-end w-[30%]">
                  <span>Price</span>

                  <p className="text-black text-tiny font-semibold">
                    Listed <s>{item.price}</s>
                  </p>
                  <span className="text-danger-500 font-semibold text-xl">
                    -{Math.floor(item.discountPercentage)}%
                  </span>
                  <p className="text-black font-semibold text-xl">
                    Only ₹&nbsp;
                    {item.price -
                      Math.floor(
                        (item.price / 100) * Math.floor(item.discountPercentage)
                      )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="my-10 w-[20%]">
            <Card>
              <CardHeader className="font-semibold text-xl">
                Cart Value
              </CardHeader>
              <CardBody>
                <div className="flex justify-between w-full">
                  <h1 className="font-semibold ">Items :</h1>
                  <span className=" ">5</span>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="font-semibold ">Shipping :</h1>
                  <span className=" ">110</span>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="font-semibold ">Taxes :</h1>
                  <span className=" ">400</span>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="font-semibold ">Discount :</h1>
                  <span className=" ">220</span>
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-between w-full">
                  <h1 className="font-semibold ">Subtotal(5 Item) :</h1>
                  <span className=" "> 20,150</span>
                </div>
                <Button color="success" className="text-white font-bold w-full">
                  Proceed to Buy
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
