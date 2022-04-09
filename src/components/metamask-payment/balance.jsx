import { Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";

const Balance = ({ user, isAuthenticated }) => {
  const Web3Api = useMoralisWeb3Api();
  const [ethBalance, setEthBalance] = useState(0);
  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
      })
      .catch((error) => console.log(error));
    if (result.balance) {
      setEthBalance(Moralis.Units.FromWei(result.balance));
    }
    console.log(result);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNativeBalance();
    }
  }, [isAuthenticated, ethBalance]);
  return (
    <div>
      {isAuthenticated && ethBalance && (
        <Text mt="4" textAlign="right">
          Balance: $ {ethBalance} <b>ETH</b>
        </Text>
      )}
    </div>
  );
};

export default Balance;
