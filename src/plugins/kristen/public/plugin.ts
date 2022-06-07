import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '../../../core/public';
import { KristenPluginSetup, KristenPluginStart, AppPluginStartDependencies } from './types';
import { DEFAULT_APP_CATEGORIES } from '../../../core/public';
import { PLUGIN_NAME } from '../common';

export class KristenPlugin implements Plugin<KristenPluginSetup, KristenPluginStart> {
  public setup(core: CoreSetup): KristenPluginSetup {
    // Register an application into the side navigation menu
    const { getStartServices } = core;
    core.application.register({
      id: 'kristen',
      title: PLUGIN_NAME,
      category: DEFAULT_APP_CATEGORIES.management,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        const [serviceReturn] = await getStartServices();
        const { application } = serviceReturn;
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params, application);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('kristen.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): KristenPluginStart {
    return {};
  }

  public stop() {}
}
