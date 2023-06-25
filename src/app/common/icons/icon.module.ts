import { NgModule } from '@angular/core';
import { IconAddComponent } from './icon-add.component';
import { IconMinusComponent } from './icon-minus.component';

@NgModule({
    declarations: [
        IconAddComponent,
        IconMinusComponent
    ],
    imports: [],
    exports: [
        IconAddComponent,
        IconMinusComponent
    ]
})
export class IconModule {
}
