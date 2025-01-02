import React from 'react';
import { createRoot } from 'react-dom/client';
import Extension from './Extension';

import '@returfs/shared-external-react/dist/index.css';

const resourceRoute = 'http://project.test/api/dummy/txt';

createRoot(document.getElementById('root')!).render(
  // WIP
  <Extension resourceRoute={resourceRoute} settings={'test'} />,
);
