import '../lib/polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsDemoModule}             from "./app/FormsDemoModule";

platformBrowserDynamic().bootstrapModule(FormsDemoModule)
    .catch(err => console.log(err));
