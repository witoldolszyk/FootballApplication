import { TestBed } from '@angular/core/testing';

import { TeamResultsDataService } from './team-results-data.service';

describe('TeamResultsDataService', () => {
  let service: TeamResultsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamResultsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
