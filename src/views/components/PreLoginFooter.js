import React from "react";
import fdic from "../../images/fdic.jpg";
import house from "../../images/house.jpg";

function PreLoginFooter() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div>
          <ul className="footer-list-2">
            <li>
              <a
                href="https://www.capitalone.com/help-center/"
                target="_blank"
                rel="noreferrer"
              >
                HELP
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/help-center/contact-us/"
                target="_blank"
                rel="noreferrer"
              >
                CONTACT US
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                PRIVACY
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/identity-protection/"
                target="_blank"
                rel="noreferrer"
              >
                SECURITY
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/terms-conditions/"
                target="_blank"
                rel="noreferrer"
              >
                TERMS & CONDITIONS
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/accessibility/"
                target="_blank"
                rel="noreferrer"
              >
                ACCESSIBILITY
              </a>
            </li>
          </ul>
          <ul className="footer-list-2 footer-list-3">
            <li>
              <a
                href="https://www.capitalone.com/military/"
                target="_blank"
                rel="noreferrer"
              >
                SERVICE MEMBERS CIVIL RELIEF ACT
              </a>
            </li>
            <li>
              <a
                href="https://ecm.capitalone.com/WCM/navigation/patriot-act-certification-cof-master_ada_2021.pdf"
                target="_blank"
                rel="noreferrer"
              >
                PATRIOT ACT CERT
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/subpoena-policy/"
                target="_blank"
                rel="noreferrer"
              >
                SUBPOENA POLICY
              </a>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/disclosures/"
                target="_blank"
                rel="noreferrer"
              >
                ADDITIONAL DISCLOSURES
              </a>
            </li>
          </ul>
          <div className="gov">
            <a href="https://www.fdic.gov/" target="_blank" rel="noreferrer">
              <img src={fdic} alt="federal deposit insurance corporation"></img>
            </a>
            <a
              href="https://www.occ.gov/publications-and-resources/publications/consumer-protection-pubs/files/equal-housing-lender.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={house} alt="equal housing lender"></img>
            </a>
            <a
              href="https://www.jameshlo.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>© 2024 James H Lo</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default PreLoginFooter;
