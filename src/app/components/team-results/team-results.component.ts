import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamResultsDataService } from 'src/app/services/team-results-data.service';
import { FixtureData, FixtureItem } from 'src/app/models/fixture.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent implements OnInit{
  teamId: number = 0;

  matchResults$?: Observable<FixtureItem[]>;

  constructor(
    private route: ActivatedRoute,
    private teamResultDataService: TeamResultsDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const teamIdParam = this.route.snapshot.paramMap.get('teamId');
    
    if (teamIdParam) {
      this.teamId = +teamIdParam;
    } else {
      console.error('Team ID not found in route parameters.');
    }
    this.getMatchResultsForTeam()
  }

  getMatchResultsForTeam(): void {
    const currentDate = new Date();
    this.matchResults$ = this.teamResultDataService.fetchRoundsForSeason(this.teamId).pipe(
      map((data: FixtureData) => {
        return data.response
          .filter(item => new Date(item.fixture.date) <= currentDate)
          .sort((a, b) => new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime());
      })
    );
  }

 goBack(): void {
  this.location.back();
 }

}
