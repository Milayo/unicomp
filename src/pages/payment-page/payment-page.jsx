import React from "react";
import { Text, Button,  Link } from "@chakra-ui/react";
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
        <Link href="/payment/checkout">
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            mb={10}
            size="lg"
          >
            PAY NOW
          </Button>
        </Link>

        <div className="payment-row">
          <Text>Faculty Dues</Text>
          <span>$100</span>
        </div>
        <Link href="/payment/checkout">
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            mb={10}
            size="lg"
          >
            PAY NOW
          </Button>
        </Link>

        <div className="payment-row">
          <Text>Tuition Fees</Text>
          <span>$1000</span>
        </div>
        <Link href="/payment/checkout">
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            size="lg"
          >
            PAY NOW
          </Button>
        </Link>
      </PaymentContainer>
    </Layout>
  );
};

export default PaymentPage;
