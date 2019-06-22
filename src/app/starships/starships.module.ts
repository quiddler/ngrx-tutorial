import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShips from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';
import { CustomersRoutingModule } from './starships-routing.module';

@NgModule({
  declarations: [ShipListComponent],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    StoreModule.forFeature('starships', fromShips.reducers),
    EffectsModule.forFeature([ShipsEffects])
  ]
})
export class StarshipsModule { }
