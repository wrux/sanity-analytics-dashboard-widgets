import React, { useEffect, useState } from 'react';
import { DashboardWidget, LayoutConfig } from '@sanity/dashboard';
import { Text } from '@sanity/ui';
import { Frame } from '../components';

export type FathomWidgetConfig = {
  domain: string;
  password?: string;
  siteID: string;
};

async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

const Widget = ({ domain, password, siteID }: FathomWidgetConfig) => {
  const [iframeUrl, setIframeUrl] = useState<string>();

  useEffect(() => {
    const getIframeUrl = async () => {
      let baseUrl = `https://app.usefathom.com/share/${siteID}/${domain}`;
      if (password) {
        const hashedPassword = await digestMessage(password);
        baseUrl = `${baseUrl}/?password=${hashedPassword}`;
      }
      setIframeUrl(baseUrl);
    };
    getIframeUrl();
  }, [domain, password, siteID]);

  if (!siteID) {
    return (
      <Frame>
        <Text size={1}>Please configure the widget</Text>
      </Frame>
    );
  }

  return (
    <Frame>
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          loading="lazy"
          style={{
            width: '1px',
            minWidth: '100%',
            // TODO: Dynamically pull from iframe.
            height: '111.875rem',
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </Frame>
  );
};

export type fathomWidgetConfig = FathomWidgetConfig & {
  layout?: LayoutConfig;
};

export function fathomWidget(config: fathomWidgetConfig): DashboardWidget {
  return {
    name: 'analytics-widget',
    component: () => <Widget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}
