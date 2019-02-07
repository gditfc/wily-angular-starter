export const environment = {
  production: true,
  title: 'Wily Starter Project',
  whitelistUrls: ['services.transcend.csra.io'],
  baseUrl: 'https://services.transcend.csra.io/wily/api',
  helpServiceUrl: 'https://services.transcend.csra.io/help',
  helpProductKey: 'wily',
  helpSystemUrl: 'https://help.transcend.csra.io',
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
