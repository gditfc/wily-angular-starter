export const environment = {
  production: true,
  title: 'Wily Starter Project',
  whitelistUrls: ['services.transcend.csra.io'],
  baseUrl: 'https://services.transcend.csra.io/wily/api',
  appManagement: {
    serviceUrl: '',
    productKey: ''
  },
  authData: {
    ClientId : '',
    AppWebDomain : '',
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : '',
    RedirectUriSignOut : '',
    UserPoolId : '',
    AdvancedSecurityDataCollectionFlag : false
  },
  idleConfig: {
    idle: 600,
    timeout: 60,
    ping: 600
  }
};
