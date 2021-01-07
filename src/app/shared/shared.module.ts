import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
        DropdownDirective,
        SpinnerComponent,
        AlertComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DropdownDirective,
        SpinnerComponent,
        AlertComponent,
        CommonModule
    ]
})
export class SharedModule {

}