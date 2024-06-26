# Capital One Banking Clone Client

This project is a front-end clone of the Capital One banking interface, designed to authentically replicate the company's user interface. Key features include a custom animated background and a user-friendly navigation system. Users can seamlessly perform essential banking functions such as:

Logging in
Resetting passwords
Depositing funds
Withdrawing funds
Sending funds to other users

**Link to project:** https://resilientcoda.com/

![application website](/src/images/coda.webp)

## How It's Made:

**Tech used:** HTML, CSS, Sass, JavaScript, React

I designed this project using MVC principles, with the entire client section representing the view. Capital One has its own proprietary font and widget system, which streamlines the development process. Since I did not have access to these resources, I crafted each component from the ground up. I used the Roboto font as it closely resembles Capital One's Optimist font. Leveraging single-page app benefits, I harnessed the simplicity of importing CSS at the root level, effortlessly propagating styles across all pages for a cohesive user experience. Although I used React, many of the components have unique features, including different stylings and elements. It was challenging to design props that could be used in an organized way across components, but I managed to achieve it successfully where applicable. I organized my folder structure by adding frequently used functions into 'hooks', smaller building blocks of each page into 'components' and entire pages into 'pages'.

After the UI skeleton was built, implementing form input and validation was the next step. Since Capital One places great emphasis on forms and security, it was imperative to include strict form validations on both the client and server sides to minimize errors. While HTML5 forms provide excellent built-in validation through attributes like 'required' and various input types, these were not comprehensive enough for my needs. For example, HTML5 number input fields force the use of arrows/spinners, which is not standard practice. Additionally, they do not prevent the input of non-numerical data. To address this, I created an 'onlyNumbers' function that runs onKeyDown to prevent any input mistakes. I also used text input fields to remove the arrows found in number fields for convenience.

Regarding the loading of personalized user information, understanding the intricacies of React's useEffect callback proved invaluable. Its execution after regular JavaScript code and JSX rendering, coupled with the asynchronous nature of network requests to the server, illuminated the importance of asynchronous programming paradigms. I'm constantly in awe of how lightweight and quick React can be when building an app. All pages and information loads within three seconds, minimizing the bounce rate.

While building custom hooks, integrating the 'finally' clause within try-catch blocks significantly enhanced UI robustness, providing a final termination of the temporary loading spinner that appears during server requests. Utilizing useState facilitated dynamic UI rendering especially with modals, offering users tailored experiences based on varying conditions like open/close.

## Optimizations

## Lessons Learned:
