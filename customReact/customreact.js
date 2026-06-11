const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank"
  },
    children: "Google"

};

function customRender(reactElement, container){
    // const element = document.createElement(reactElement.type);
    // element.innerHTML = reactElement.children;
    // element.setAttribute("href", reactElement.props.href);
    // element.setAttribute("target", reactElement.props.target);
    // container.appendChild(element);

    const { type, props } = reactElement;
    const element = document.createElement(type);
    element.innerHTML = reactElement.children;
    for (const prop in props) {
        if (prop !== "children") {
            element.setAttribute(prop, props[prop]);
        }
    }
    container.appendChild(element);
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);