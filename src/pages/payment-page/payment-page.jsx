import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Layout from "../../components/layout/layout-component";
import { PaymentContainer } from "./payment-page.styles";

const PaymentPage = () => {
  return (
    <Layout>
      <PaymentContainer>
        <div className="payment-row">
          <Text>Departmental Dues</Text>
          <span>$50</span>
        </div>

        <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal" className="" mb={10} size="lg">
          PAY NOW
        </Button>

        <div className="payment-row">
          <Text>Faculty Dues</Text>
          <span>$100</span>
        </div>
        <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal" className="" mb={10} size="lg">
          PAY NOW
        </Button>


        <div className="payment-row">
          <Text>Tuition Fees</Text>
          <span>$1000</span>
        </div>
        <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal" className="" size="lg">
          PAY NOW
        </Button>
      </PaymentContainer>
    </Layout>
  );
};

export default PaymentPage;
