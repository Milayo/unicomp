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
  useToast,
} from "@chakra-ui/react";
import "./metamask-payment.scss";
import Balance from "./balance.jsx";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";

import { useWeb3Transfer } from "react-moralis";

const MetamaskPayment = ({ user }) => {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(
    "0x53c7d1EaF3d298759F5C7A3d15421B2565e34f3F"
  );

  const toast = useToast();

  const { authenticate, isAuthenticated, logout } = useMoralis();

  const handleChange = (value) => {
    setAmount(value);
  };

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount || 0),
    receiver: receiver,
    type: "native",
  });

  const handleBtnFunc = () => {
    if (isAuthenticated) {
      logout();
    } else {
      toast({
        title: "Metamask Plugin/App Required.",
        description: "Please ensure you have Metamask on your device",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      authenticate();
    }
  };

  return (
    <div className="metamaskpayment">
      <div>
        <div className="metamaskpayment-header">
          {" "}
          <h3>PAY WITH CRYPTO</h3>
          <Button colorScheme="white" variant="outline" onClick={handleBtnFunc}>
            {" "}
            {isAuthenticated ? "Disconnect Wallet" : "Connect Wallet"}
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
              <FormControl mt="3">
                <FormLabel htmlFor="amount" fontSize="1.3rem">
                  Amount of ETH
                </FormLabel>
                <NumberInput step={0.1} onChange={handleChange} size="lg">
                  <NumberInputField id="amount" value={amount} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Balance user={user} isAuthenticated={isAuthenticated}/>
                <FormLabel mt="4" htmlFor="receiver" fontSize="1.3rem">
                  Send to
                </FormLabel>
                <Input
                  id="receiver"
                  type="text"
                  defaultValue={receiver}
                  placeholder="Receiver's Address"
                  size="lg"
                />
                <Text mt={5}>
                  NB: Ensure to include the correct ETH equivalent of your fees.
                  Call the calldesk for help if necessary.
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
    </div>
  );
};

export default MetamaskPayment;
