import React, { FC, PropsWithChildren } from 'react';
import { DashboardWidgetContainer } from '@sanity/dashboard';
import { Box } from '@sanity/ui';

const Frame: FC<PropsWithChildren<{
  title: string;
}>> = ({ children, title }) => (
  <DashboardWidgetContainer header={title}>
    <Box padding={3}>{children}</Box>
  </DashboardWidgetContainer>
);

export default Frame;
