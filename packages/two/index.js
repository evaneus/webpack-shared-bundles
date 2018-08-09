export default class Two extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    Promise.all([
      import('react'),
      import('react-dom'),
      import('lodash'),
      import('katex')
    ]).then(([React, ReactDOM, _, katex]) => {
      const mathHtml =  katex.renderToString("c = \\sqrt{a^2 + b^2}");
      console.log(`math from module two ${mathHtml}`);
      var element = React.createElement(
        'div',
        {
          name: this.getAttribute('name')
        },
        `Hello two ${_.nth(['cruel', 'evil'], _.random(1, 2))} world`
      );
      ReactDOM.render(element, this);
    });
  }
}
