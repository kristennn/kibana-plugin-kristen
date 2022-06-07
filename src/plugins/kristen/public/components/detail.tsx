import React from 'react';
import { ApplicationStart } from 'src/core/public';

import { EuiButton, EuiSpacer, EuiFlexGroup, EuiFlexItem, EuiCard } from '@elastic/eui';

interface Detail {
  name: string;
  application: ApplicationStart;
}

export const Detail = (props: Detail) => {
  return (
    <>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <EuiCard title={props.name} description="" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton onClick={() => props.application.navigateToUrl('/app/home')}>
            dashboard
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />
      <EuiCard title="..." description="" />
    </>
  );
};
