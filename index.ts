import {renderToString} from 'react-dom/server';
import {createElement} from 'react';

import component1 from './component1';
import component2 from './component2';

const map = {component1, component2};

const [file] = process.argv.slice(2);

const html = renderToString(createElement(map[file], {}));
process.stdout.write(html);
process.exit(0);
