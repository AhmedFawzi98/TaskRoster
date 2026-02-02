import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [HeaderComponent, CardComponent],
    exports: [HeaderComponent, CardComponent],
})
export class SharedModule {}
