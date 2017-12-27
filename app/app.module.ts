import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptUIChartModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
