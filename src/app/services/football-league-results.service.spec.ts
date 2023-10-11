import { TestBed } from '@angular/core/testing';

import { FootballLeagueResultsService } from './football-league-results.service';

describe('FootballLeagueResultsService', () => {
  let service: FootballLeagueResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballLeagueResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
