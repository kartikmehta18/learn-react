

function customRender(reactElement, container) {
  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);
  container.appendChild(domElement);*/
// GOOD WAY
const domElement=document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
  domElement.setAttribute(prop,reactElement.props[prop]);
  }
  container.appendChild(domElement);
  
}

function linkedin(linkedinElement, container) {
  const domElement = document.createElement('a');
  domElement.innerHTML = linkedinElement.children;
  domElement.setAttribute('href', linkedinElement.props.href);
  domElement.setAttribute('target', linkedinElement.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const linkedinElement = {
  type: 'a',
  props: {
    href: 'https://www.linkedin.com/in/kartik-mehta-%F0%9F%94%9C-witconf-6729b0255',
    target: '_blank',
  },
  children: 'Click me to visit linkedin',
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
linkedin(linkedinElement, mainContainer);
