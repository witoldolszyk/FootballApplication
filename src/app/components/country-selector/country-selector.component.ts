import { Component} from '@angular/core';
import { Standing, TeamStandings } from 'src/app/models/standing.interface';
import { FootballLeagueResultsService } from 'src/app/services/football-league-results.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  
}
