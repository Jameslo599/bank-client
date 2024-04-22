import React from "react";

function MyBannerView({ user }) {
  return (
    <div className="banner">
      <p>
        {user}, 2023 tax forms will be available by January 31st.{" "}
        <a
          href="https://www.capitalone.com/help-center/checking-savings/tax-forms-from-capital-one/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more.
        </a>
      </p>
    </div>
  );
}

export default MyBannerView;
