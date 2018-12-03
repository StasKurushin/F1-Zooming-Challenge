const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const args = minimist(process.argv.slice(2));

const componentTemplate = `import React, { PureComponent } from 'react';

export default class ${args.className} extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="${args.className}">
      </div>
    );
  }
}
`;

fs.mkdirSync(
  path.resolve(__dirname, '..', 'src', 'components', args.className),
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', args.className, `${args.className}.jsx`),
  componentTemplate,
  { flag: 'w+' }
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', args.className, `${args.className}.scss`),
  `.${args.className} {

  }
  `,
  { flag: 'w+' }
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', args.className, 'index.js'),
  `export default from './${args.className}';`,
  { flag: 'w+' }
);

