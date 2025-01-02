import React, { memo, StrictMode } from 'react';
import {
  ColorKey,
  Entrance,
  PortalSystemProps,
} from '@returfs/shared-external-react';

import '@pqina/pintura/pintura.css';

export default memo(function Extension({
  item,
  resourceRoute,
  settings,
  onUpdate,
}: PortalSystemProps) {
  const themeColor = ColorKey.Gray;

  return (
    <StrictMode>
      <Entrance themeColor={themeColor} className="h-screen w-full"></Entrance>
    </StrictMode>
  );
});
