import '../lib/polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoModule}             from "./app/FormsDemoModule";

platformBrowserDynamic().bootstrapModule(DemoModule)
    .catch(err => console.log(err));
