import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { init as initApm } from "@elastic/apm-rum";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
const apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://172.30.157.125:8200',

  // Set service version (required for sourcemap feature)
  serviceVersion: ''
})
if (environment.production) {
  enableProdMode();
  // override the console.log in the client side
  if (window) {
    window.console.log = function () {};
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
