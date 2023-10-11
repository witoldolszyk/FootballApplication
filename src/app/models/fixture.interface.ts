export interface FixtureData {
    get: string;
    parameters: {
      season: string;
      team: string;
    };
    errors: string[] | null;
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: FixtureItem[];
  }
  
 export interface FixtureItem {
    fixture: {
      id: number;
      referee: string | null;
      timezone: string;
      date: string;
      timestamp: number;
      periods: {
        first: number | null;
        second: number | null;
      };
      venue: {
        id: number | null;
        name: string | null;
        city: string | null;
      };
      status: {
        long: string;
        short: string;
        elapsed: number | null;
      };
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string | null;
      flag: string | null;
      season: number;
      round: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string | null;
        winner: boolean | null;
      };
      away: {
        id: number;
        name: string;
        logo: string | null;
        winner: boolean | null;
      };
    };
    goals: {
      home: number | null;
      away: number | null;
    };
    score: {
      halftime: {
        home: number | null;
        away: number | null;
      };
      fulltime: {
        home: number | null;
        away: number | null;
      };
      extratime: {
        home: number | null;
        away: number | null;
      };
      penalty: {
        home: number | null;
        away: number | null;
      };
    };
  }
  