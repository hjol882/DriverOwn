
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DriverOwn/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DriverOwn"
  },
  {
    "renderMode": 2,
    "route": "/DriverOwn/login"
  },
  {
    "renderMode": 2,
    "route": "/DriverOwn/sign_in"
  },
  {
    "renderMode": 2,
    "route": "/DriverOwn/cliente"
  },
  {
    "renderMode": 2,
    "route": "/DriverOwn/unidad"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: '7180133a50b9b99b6f1958aee47eaafa3180938181b3f27556f87344a0b50599', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '5f5df6fd0ec5ac700dc1eb3c06e9ff5fcefe3490b31c191ce1a08244f5f7344d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 15184, hash: '18f454aea75f4bd9a21bb34d1de33e73ecb942a1d6bfef13354eb937d405836c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21198, hash: '05a786f7be1033f51c7db33d7bd650643bd72df85dec51e19486d7cb4c4c67e5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sign_in/index.html': {size: 15184, hash: '2e470e0a2cb069984273358ec148f1abfc4e0b3a79ca02dc4c5bca30dec7eb09', text: () => import('./assets-chunks/sign_in_index_html.mjs').then(m => m.default)},
    'cliente/index.html': {size: 21198, hash: '05a786f7be1033f51c7db33d7bd650643bd72df85dec51e19486d7cb4c4c67e5', text: () => import('./assets-chunks/cliente_index_html.mjs').then(m => m.default)},
    'unidad/index.html': {size: 21198, hash: '05a786f7be1033f51c7db33d7bd650643bd72df85dec51e19486d7cb4c4c67e5', text: () => import('./assets-chunks/unidad_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
