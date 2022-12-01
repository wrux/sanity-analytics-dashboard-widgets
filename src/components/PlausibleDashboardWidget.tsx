import React from 'react';
import { Text, useTheme } from '@sanity/ui';
import Frame from './Frame';

const widgetTitle = 'Plausible Analytics';

export type PlausibleDashboardWidgetConfig = {
  auth: string;
  domain: string;
};

export const PlausibleDashboardWidget = ({
  auth,
  domain,
}: PlausibleDashboardWidgetConfig) => {
  const theme = useTheme();

  if (!auth && !domain) {
    return (
      <Frame title={widgetTitle}>
        <Text size={1}>Please configure the widget</Text>
      </Frame>
    );
  }

  const iframeUrl = new URL(`https://plausible.io/share/${domain}`);
  iframeUrl.searchParams.append('auth', auth);
  iframeUrl.searchParams.append('embed', 'true');
  iframeUrl.searchParams.append(
    'theme',
    theme?.sanity?.color?.dark ? 'dark' : 'light'
  );
  iframeUrl.searchParams.append(
    'background',
    theme?.sanity?.color?.base?.bg || 'transparent'
  );

  return (
    <Frame title={widgetTitle}>
      <iframe
        title={widgetTitle}
        plausible-embed="true"
        src={iframeUrl.toString()}
        loading="lazy"
        style={{
          width: '1px',
          minWidth: '100%',
          // TODO: Dynamically pull from iframe.
          minHeight: '107rem',
        }}
      />
    </Frame>
  );
};
