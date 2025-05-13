import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/share.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharedModule],
    bootstrap: [AppComponent] 
})

export class AppModule{}