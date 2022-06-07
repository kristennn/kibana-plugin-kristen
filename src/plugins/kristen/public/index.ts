import './index.scss';

import { KristenPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new KristenPlugin();
}
export { KristenPluginSetup, KristenPluginStart } from './types';
