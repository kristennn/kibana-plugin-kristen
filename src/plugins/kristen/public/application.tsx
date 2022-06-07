import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationStart } from 'src/core/public';
import { AppPluginStartDependencies } from './types';
import { KristenApp } from './components/app';
import { AppMountParameters, CoreStart } from '../../../core/public';

export const renderApp = (
  { notifications, http }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element }: AppMountParameters,
  application: ApplicationStart
) => {
  ReactDOM.render(
    <KristenApp
      basename={appBasePath}
      notifications={notifications}
      http={http}
      navigation={navigation}
      application={application}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
