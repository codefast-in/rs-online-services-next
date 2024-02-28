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
  Google,
  MailRounded,
  RemoveRedEyeRounded,
  VisibilityOffRounded,
} from "@mui/icons-material";
import {Button} from "@nextui-org/button";
import {Checkbox} from "@nextui-org/checkbox";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Divider} from "@mui/material";
import UserRegistration from "./userRegistrationModal";

export default function Login() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Button
        onPress={onOpen}
        color="success"
        variant="bordered"
        className=" font-semibold w-full">
        Login
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-bold text-2xl ">
                Log in
              </ModalHeader>
              <ModalBody className="gap-4">
                <Input
                  autoFocus
                  color="success"
                  labelPlacement="outside"
                  endContent={
                    <MailRounded className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
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
                      {isVisible ? (
                        <VisibilityOffRounded className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <RemoveRedEyeRounded className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
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
                    Remember me
                  </Checkbox>
                  <Link
                    color="primary"
                    href="#"
                    size="sm"
                    className="text-default-500 hover:text-green-500">
                    Forgot password?
                  </Link>
                </div>
                <Divider />
              </ModalBody>
              <ModalFooter className="flex flex-col gap-4">
                <Button
                  color="success"
                  className="text-white w-full font-bold"
                  onPress={onClose}>
                  Log in
                </Button>
                <Button
                  color="success"
                  className="text-white w-full font-bold"
                  onPress={onClose}>
                  <Google /> Login With Google
                </Button>
                <span>
                  Don&apos;t have account
                  <UserRegistration />
                </span>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
