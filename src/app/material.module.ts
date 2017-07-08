import {MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdSnackBarModule} from "@angular/material";
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule,
        MdSnackBarModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule,
        MdSnackBarModule
    ],
})
export class MyMaterialModule {
}