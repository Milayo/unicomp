import React, { useState } from "react";
import {
  Text,
  Button,
  FormLabel,
  FormControl,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import "./metamask-payment.scss";
import Balance from "./balance.jsx";

import { useNavigate } from "react-router";
import Moralis from "moralis";

import { useWeb3Transfer } from "react-moralis";

const MetamaskPayment = ({ logout, user }) => {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(
    "0x53c7d1EaF3d298759F5C7A3d15421B2565e34f3F"
  );

  const toast = useToast();

  const navigate = useNavigate();
  const handleChange = (value) => {
    setAmount(value);
  };

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount || 0),
    receiver: receiver,
    type: "native",
  });

  const logoutbutton = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="metamaskpayment">
      {user ? (
        <div>
          <div className="metamaskpayment-header">
            {" "}
            <h3>PAY WITH CRYPTO</h3>
            <h4>{user.getUsername()}</h4>
            <Button colorScheme="teal" onClick={logoutbutton}>
              LOGOUT
            </Button>
          </div>
          <div className="metamaskpayment-content">
            <div className="metamaskpayment-content2">
              <Text fontSize="2xl" fontWeight="bold">
                Send ETH
              </Text>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await Moralis.enableWeb3();
                  fetch({
                    onSuccess: () => {
                      toast({
                        title: "ETH Successfully Sent",
                        description:
                          "Fresh ETH are showing up in the receiver's wallet",
                        status: "success",
                        duration: 1200,
                        isClosable: true,
                      });
                      setReceiver("");
                    },
                    onError: (error) => {
                      toast({
                        title: "Error.",
                        description: error,
                        status: "error",
                        duration: "900",
                        isClosable: true,
                      });
                    },
                  });
                }}
              >
                <FormControl mt="4">
                  <FormLabel htmlFor="amount">Amount of ETH</FormLabel>
                  <NumberInput step={0.1} onChange={handleChange}>
                    <NumberInputField id="amount" value={amount} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Balance user={user} />
                  <FormLabel mt="4" htmlFor="receiver">
                    Send to
                  </FormLabel>
                  <Input
                    id="receiver"
                    type="text"
                    placeholder="Receiver's Address"
                    value={receiver}
                  />
                  <Text mt={5}>
                    NB: Ensure to include the correct ETH equivalent of your
                    fees. Call the calldesk for help.
                  </Text>
                </FormControl>
                <Button
                  mt="6"
                  type="submit"
                  colorScheme="teal"
                  disabled={isFetching}
                >
                  PAY
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      )}
    </div>
  );
};

export default MetamaskPayment;
