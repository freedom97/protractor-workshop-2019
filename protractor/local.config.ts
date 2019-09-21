import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';


export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
