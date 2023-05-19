import React from "react";
import { Link } from "react-router-dom";

function Condition() {
  return (
    <div style={{ margin: "100px", width: "600px" }}>
      <div>
        <h1>Conditions of Use</h1>
        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: 900 }}>Disclaimer:</span> In the event of
          any discrepancy or conflict, the English version will prevail over the
          translation.
        </p>
      </div>
      The website www.amazon.in ("Amazon.in") is operated by Amazon Seller
      Services Private Limited ("Amazon" or "us" or "we" or "our"), having its
      registered office located 8th Floor, Brigade Gateway 26/1 Dr. Rajkumar
      Road Bangalore – 560055, Karnataka, India. Please read the Conditions of
      Use document carefully before using the Amazon.in website. By using the
      Amazon.in website, you signify your agreement to be bound by Amazon's
      Conditions of Use. Amazon Europe Core SARL, Amazon EU SARL, Amazon
      Services Europe SARL and Amazon Media EU SARL, all four at 38 avenue John
      F. Kennedy, L-1855, Luxembourg and Amazon Digital UK Limited of 1
      Principal Place, Worship Street, London, EC2A 2FA, UK (together "Amazon
      Europe") are data controllers of personal information collected and
      processed through Amazon Services. Details can be found here. As described
      in our Privacy Notice, we share information with Amazon.com, Inc. and the
      subsidiaries that Amazon.com, Inc. contrprivols that are either subject to
      our Privacy Notice or follow practices at least as protective as those
      described in our Privacy Notice. We also share information with
      third-party service providers. For example, we use third-party service
      providers to fulfil orders for products or services, and to deliver
      packages. For any further details on our security practices please read
      our Privacy Notice. For any queries or issues relating to Amazon.in, you
      can contact us by clicking{" "}
      <Link to="/signin">www.amazon.in/gp/help/contact-us</Link>
    </div>
  );
}

export default Condition;
