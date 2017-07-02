import {MdButtonModule, MdCardModule, MdInputModule, MdListModule} from "@angular/material";
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule
    ],
})
export class MyMaterialModule {
}