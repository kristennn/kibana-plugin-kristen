import React from 'react';
import { I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CoreStart } from 'kibana/public';
import { ApplicationStart } from 'src/core/public';

import { EuiLink, EuiPage, EuiPageBody, EuiBasicTable, EuiHealth } from '@elastic/eui';

import { Detail } from './detail';
import { NavigationPublicPluginStart } from '../../../navigation/public';

interface KristenAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
  application: ApplicationStart;
}

interface Item {
  id: number;
  hostName: string;
  state: number;
}

// mock table data
const items: Item[] = [
  {
    id: 1,
    hostName: 'host1',
    state: 0,
  },
  {
    id: 2,
    hostName: 'host2',
    state: 1,
  },
  {
    id: 3,
    hostName: 'host3',
    state: 2,
  },
];

export const KristenApp = ({ basename, application }: KristenAppDeps, core: CoreStart) => {
  const renderDetail = (props: any) => {
    return <Detail name={props.match.params.name} application={application} />;
  };

  const renderTable = () => {
    return (
      <EuiBasicTable
        items={items}
        columns={[
          {
            field: 'hostName',
            name: 'Host Name',
            render: (name: string) => {
              return <EuiLink href={`/app/kristen/${name}`}>{name}</EuiLink>;
            },
          },
          {
            field: 'state',
            name: 'State',
            render: (state: number) => {
              enum stateColor {
                'warning',
                'success',
                'danger',
              }
              return <EuiHealth color={stateColor[state]} />;
            },
          },
        ]}
      />
    );
  };

  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <EuiPage restrictWidth="1000px">
            <EuiPageBody>
              <Switch>
                <Route path="/:name" component={renderDetail} />
                <Route path="/" component={renderTable} />
              </Switch>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};
