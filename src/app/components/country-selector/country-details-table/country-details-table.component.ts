import { Component } from '@angular/core';
import { Standing, TeamStandings } from 'src/app/models/standing.interface';
import { FootballLeagueResultsService } from 'src/app/services/football-league-results.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details-table',
  templateUrl: './country-details-table.component.html',
  styleUrls: ['./country-details-table.component.css']
})
export class CountryDetailsTableComponent {
  countryId: number = 0;
  standingsData$?: Observable<TeamStandings[]>; 

  constructor(private route: ActivatedRoute, private footballLeageResultsService: FootballLeagueResultsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['countryId']) {
        this.countryId= +params['countryId'];
        this.onSelectCountry(this.countryId);
      }
    });
  }

 onSelectCountry(countryId: number): void {
  this.standingsData$ = this.footballLeageResultsService.fetchLeagueResults(countryId).pipe(
    map((data: Standing) => data.response[0].league.standings[0])
  );
 }

}
