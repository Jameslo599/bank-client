import React, { useState } from "react";
import fdic from "../../images/fdic.jpg";
import house from "../../images/house.jpg";
import ShowToHide from "../../images/icons/show-to-hide";

function MyFooterView() {
  const [open, setOpen] = useState({
    firstUl: false,
    secondUl: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setOpen((prevState) => ({
      ...prevState,
      [name]: open[name] === false ? true : false,
    }));
    hideExcess(name);
  };

  const hideExcess = (name) => {
    document.getElementById(name).style.overflow = "hidden";
  };

  const handleEnd = (e) => {
    if (e.target.className === "collapse")
      return (e.target.style.overflow = "visible");
  };

  return (
    <div>
      <footer className="footer">
        <div>
          <ul className="footer-list-1">
            <li>
              <a
                href="https://www.capitalone.com"
                target="_blank"
                rel="noreferrer"
              >
                PRODUCTS
              </a>
            </li>
            <li className="sublist">
              <div onClick={handleChange}>
                <ShowToHide text="ABOUT US" name="firstUl" />
              </div>

              <ul
                id="firstUl"
                className={open.firstUl ? "collapse" : undefined}
                onTransitionEnd={handleEnd}
              >
                <li>
                  <a
                    href="https://www.capitalone.com/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About Capital One
                  </a>
                </li>
                <li>
                  <a
                    href="https://investor.capitalone.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/about/newsroom/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/about/our-commitments/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investing For Good
                  </a>
                </li>
              </ul>
            </li>
            <li>CAREERS</li>
            <li className="sublist">
              <div onClick={handleChange}>
                <ShowToHide text="LEGAL" name="secondUl" />
              </div>
              <ul
                id="secondUl"
                className={open.secondUl ? "collapse" : undefined}
                onTransitionEnd={handleEnd}
              >
                <li>
                  <a
                    href="https://www.capitalone.com/military/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Servicemembers Civil Relief Act
                  </a>
                </li>
                <li>
                  <a
                    href="https://ecm.capitalone.com/WCM/navigation/patriot-act-certification-cof-master_ada_2021.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Patriot Act Cert
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/digital/subpoena-policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Subpoena Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capitalone.com/digital/disclosures/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Additional Disclosures
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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
            <li>
              <button>FEEDBACK</button>
            </li>
            <li>
              <a
                href="https://www.capitalone.com/digital/facts2019/"
                target="_blank"
                rel="noreferrer"
              >
                2019 CYBER INCIDENT
              </a>
            </li>
          </ul>
          <p>
            Products and services are offered by Capital One, N.A., Member FDIC.
            Deposit products are insured to{" "}
            <a
              href="https://www.capitalone.com/bank/money-management/banking-basics/fdic-insurance-limits/"
              target="_blank"
              rel="noreferrer"
            >
              current FDIC limits.
            </a>
          </p>
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

export default MyFooterView;
