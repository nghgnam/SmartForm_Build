import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/share.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, 
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent] 
})

export class AppModule{}