import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { FootballLeagueResultsService } from './services/football-league-results.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamResultsComponent } from './components/team-results/team-results.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamResultsDataService } from './services/team-results-data.service';
import { CountryDetailsTableComponent } from './components/country-selector/country-details-table/country-details-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/league-selection', pathMatch: 'full' },
  {
    path: 'league-selection',
    component: CountrySelectorComponent,
    children: [
      { path: ':countryId', component: CountryDetailsTableComponent,  }
    ]
  },
  { path: 'team-detail/:teamId', component: TeamResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    TeamResultsComponent,
    CountryDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FootballLeagueResultsService, TeamResultsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
