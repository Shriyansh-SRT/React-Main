function renderElement(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Visit google",
};

const mainContainer = document.querySelector("#root");

renderElement(reactElement, mainContainer);
