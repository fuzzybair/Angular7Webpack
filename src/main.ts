import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularWebpackModule } from './app/angular-webpack.module';
platformBrowserDynamic().bootstrapModule(AngularWebpackModule);
