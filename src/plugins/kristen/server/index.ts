import { PluginInitializerContext } from '../../../core/server';
import { KristenPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new KristenPlugin(initializerContext);
}

export { KristenPluginSetup, KristenPluginStart } from './types';
