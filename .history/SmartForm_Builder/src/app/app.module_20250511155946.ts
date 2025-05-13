import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/share.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { DashBoardMoudle } from "./features/dashboard/dashboard.module";
import { FormModule } from "./features/form-builder/form.module";
import { FormBuilder, FormControl } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, 
        SharedModule,
        DashBoardMoudle,
        FormModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [
        AppComponent
    ] 
})

export class AppModule{} 