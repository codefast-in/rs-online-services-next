import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import {
  AbcRounded,
  Google,
  MailRounded,
  RemoveRedEyeRounded,
  SmartphoneRounded,
  VisibilityOffRounded,
  VpnKeyRounded,
} from "@mui/icons-material";
import {Button} from "@nextui-org/button";
import {Checkbox} from "@nextui-org/checkbox";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Divider} from "@mui/material";
import Login from "./loginModal";

export default function UserRegistration() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Button
        color="success"
        onPress={onOpen}
        className="text-white font-semibold w-full">
        Registor
      </Button>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-bold text-2xl">
                Register
              </ModalHeader>
              <ModalBody className="gap-4">
                <div className="flex gap-5">
                  <Input
                    autoFocus
                    color="success"
                    labelPlacement="outside"
                    endContent={
                      <AbcRounded className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="First Name"
                    placeholder="Your First Name"
                    variant="bordered"
                    size="lg"
                    type="text"
                  />
                  <Input
                    color="success"
                    labelPlacement="outside"
                    endContent={
                      <AbcRounded className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Last Name"
                    placeholder="Your Last Name"
                    variant="bordered"
                    size="lg"
                    type="text"
                  />
                </div>
                <div className="flex gap-5">
                  <Input
                    color="success"
                    labelPlacement="outside"
                    endContent={
                      <SmartphoneRounded className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Mobile No."
                    placeholder="Enter your mobile no"
                    variant="bordered"
                    size="lg"
                    type="phone"
                  />
                  <Input
                    color="success"
                    labelPlacement="outside"
                    endContent={
                      <MailRounded className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    size="lg"
                    type="email"
                  />
                </div>
                <Input
                  color="success"
                  labelPlacement="outside"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}>
                      <VpnKeyRounded className="text-2xl text-default-400 pointer-events-none" />
                    </button>
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  size="lg"
                />
                <Input
                  color="success"
                  labelPlacement="outside"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}>
                      <VpnKeyRounded className="text-2xl text-default-400 pointer-events-none" />
                    </button>
                  }
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="text"
                  variant="bordered"
                  size="lg"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    color="success"
                    classNames={{
                      label: "text-small ",
                      icon: "text-white",
                    }}>
                    I read and agree to Terms & Conditions
                  </Checkbox>
                  <Link
                    color="primary"
                    href="#"
                    size="sm"
                    className="text-default-500 hover:text-green-500">
                    Terms & Conditions
                  </Link>
                </div>
                <Divider />
              </ModalBody>
              <ModalFooter className="flex flex-col gap-4">
                <Button
                  color="success"
                  className="text-white w-full font-bold"
                  onPress={onClose}>
                  <Google /> Rergister With Google
                </Button>
                <Button
                  color="success"
                  className="text-white w-full font-bold"
                  onPress={onClose}>
                  Register
                </Button>
                <span>
                  If you already have an account,
                  <Login />
                </span>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
