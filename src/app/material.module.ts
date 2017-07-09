import {
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule
} from "@angular/material";
import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule,
        MdSnackBarModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdGridListModule,
        FlexLayoutModule
    ],
    exports: [
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdListModule,
        MdSnackBarModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdGridListModule,
        FlexLayoutModule
    ],
})
export class MyMaterialModule {
}