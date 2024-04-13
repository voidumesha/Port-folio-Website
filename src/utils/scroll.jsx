import ReactDOM from 'react-dom';

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    ReactDOM.findDOMNode(element).scrollIntoView({ behavior: 'smooth' });
  }
}

export default scrollToElement;