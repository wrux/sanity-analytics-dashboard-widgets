import React from 'react';
import { DashboardWidget, LayoutConfig } from '@sanity/dashboard';
import {
  FathomDashboardWidget,
  FathomDashboardWidgetConfig,
  PlausibleDashboardWidget,
  PlausibleDashboardWidgetConfig,
} from './components';

export function fathomWidget(
  config: FathomDashboardWidgetConfig & {
    layout?: LayoutConfig;
  }
): DashboardWidget {
  return {
    name: 'analytics-fathom-widget',
    component: () => <FathomDashboardWidget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}

export function plausibleWidget(
  config: PlausibleDashboardWidgetConfig & {
    layout?: LayoutConfig;
  }
): DashboardWidget {
  return {
    name: 'analytics-plausible-widget',
    component: () => <PlausibleDashboardWidget {...config} />,
    layout: config.layout ?? { width: 'full' },
  };
}
