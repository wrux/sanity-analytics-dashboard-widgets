import React, { useEffect, useState } from 'react';
import { Text } from '@sanity/ui';
import Frame from './Frame';

const widgetTitle = 'Fathom Analytics';

export type FathomDashboardWidgetConfig = {
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

export const FathomDashboardWidget = ({
  domain,
  password,
  siteID,
}: FathomDashboardWidgetConfig) => {
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
      <Frame title={widgetTitle}>
        <Text size={1}>Please configure the widget</Text>
      </Frame>
    );
  }

  return (
    <Frame title={widgetTitle}>
      {iframeUrl ? (
        <iframe
          title={widgetTitle}
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
