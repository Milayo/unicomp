import { Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";

const Balance = ({user}) => {
    const Web3Api = useMoralisWeb3Api();
    const [ethBalance, setEthBalance] = useState(0);
  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      })
      .catch((error) => console.log(error));
      if (result.balance) {
        setEthBalance(Moralis.Units.FromWei(result.balance))
    }
  };

  useEffect(() => {
    fetchNativeBalance();
  }, []);
    return (
      <div>
        {ethBalance && (
          <Text mt="4" textAlign="right">
            Balance: $ {ethBalance} <b>ETH</b>
          </Text>
        )}
      </div>
    );
};

export default Balance;
