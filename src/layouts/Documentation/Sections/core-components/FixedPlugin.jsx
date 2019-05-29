import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeFunctions = `  handleActiveClick = color => {
    ...
  };
  handleBgClick = color => {
    ...
  };`;

const codeRenderExample = `...other code

import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

...other code

class YourClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    ...other code
  }
  ...other code
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      ...other code
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        />
      ...other code
    );
  }
}

export default YourClass;
`;

class FixedPlugin extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Fixed Plugin
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/FixedPlugin/FixedPlugin.jsx
          </code>.
        </p>
        <p>
          This component is the right menu and its purpose is so you can easily
          customize the left menu.
        </p>
        <p>
          It is only rendered once inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>.
        </p>
        <p>
          If you wish to use it, you will have to implement in your
          class/function where you render it these function:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFunctions}
        </SyntaxHighlighter>
        <p>
          After this, you will need to pass the above functions to the component
          and also you will have to send to this component a default background
          color and a prop to know if the menu is opened or not..
        </p>
        <p>So in the end, you will render the component as follows:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRenderExample}
        </SyntaxHighlighter>
        <p>
          For a better understaing please, take a look inside{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/FixedPlugin/FixedPlugin.jsx
          </code>.
        </p>
      </>
    );
  }
}

export default FixedPlugin;
