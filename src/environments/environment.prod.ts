/**
 * The file contents for the current environment will overwrite these during build. The build system defaults to the dev environment which
 * uses 'environment.ts', but if you do 'ng build --env=prod' then 'environment.prod.ts' will be used instead. The list of which env maps
 * to which file can be found in 'angular.json'.
 */
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
