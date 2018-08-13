export default class Three extends HTMLElement {
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
      var template = document.createElement('template');
      template.innerHTML = mathHtml.trim();
      const mathDiv = document.createElement('div');
      mathDiv.appendChild(template.content.firstChild);
      this.appendChild(mathDiv);

      const reactDiv = document.createElement('div');
      this.appendChild(reactDiv);

      var element = React.createElement(
        'div',
        {
          name: this.getAttribute('name')
        },
        `Hello three ${_.nth(['cruel', 'evil'], _.random(0, 1))} world`
      );
      ReactDOM.render(element, reactDiv);
      
    });
  }
}
