import React from 'react';
import { DashboardWidget, LayoutConfig } from '@sanity/dashboard';
import { Text, useTheme } from '@sanity/ui';
import { Frame } from '../components';

export type PlausibleWidgetConfig = {
  auth: string;
  domain: string;
};

const Widget = ({ auth, domain }: PlausibleWidgetConfig) => {
  const theme = useTheme();

  if (!auth && !domain) {
    return (
      <Frame>
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
    <Frame>
      <iframe
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

export type plausibleWidgetConfig = PlausibleWidgetConfig & {
  layout?: LayoutConfig;
};

export function plausibleWidget(
  config: plausibleWidgetConfig
): DashboardWidget {
  return {
    name: 'analytics-widget',
    component: () => <Widget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}
