export default class One extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    Promise.all([import('react'), import('react-dom'), import('lodash')]).then(
      ([React, ReactDOM, _]) => {
        var element = React.createElement(
          'div',
          {
            name: this.getAttribute('name')
          },
          `Hello one ${_.random(0, 5)} world`
        );
        ReactDOM.render(element, this);
      }
    );
  }
}
