
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/driverown/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/driverown"
  },
  {
    "renderMode": 2,
    "route": "/driverown/login"
  },
  {
    "renderMode": 2,
    "route": "/driverown/sign_in"
  },
  {
    "renderMode": 2,
    "route": "/driverown/cliente"
  },
  {
    "renderMode": 2,
    "route": "/driverown/unidad"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: 'bae40380fc62d6aac876f526053e24ce17b958d31be6b5c513e4bcd35bceb7f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '1bb3106bc3034625c52a274a261b8ecd282d756f5b75ab5368225786d0cdfdb1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21198, hash: 'f5185020f266bedeaf5861d44634f6dcddd6f0d5e315d220995bd8b24da92664', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sign_in/index.html': {size: 15184, hash: 'efefce7c912e69bbd0e15d5cba35e382881c0ad760ef74df1bf097d471c03e62', text: () => import('./assets-chunks/sign_in_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 15184, hash: '0ee126f9492b11c5ec43d3c5402d1ab23263bec2587bf6136331d54e797b8275', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'cliente/index.html': {size: 21198, hash: 'f5185020f266bedeaf5861d44634f6dcddd6f0d5e315d220995bd8b24da92664', text: () => import('./assets-chunks/cliente_index_html.mjs').then(m => m.default)},
    'unidad/index.html': {size: 21198, hash: 'f5185020f266bedeaf5861d44634f6dcddd6f0d5e315d220995bd8b24da92664', text: () => import('./assets-chunks/unidad_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
