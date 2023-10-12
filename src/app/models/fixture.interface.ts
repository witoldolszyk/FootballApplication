export interface FixtureData {
    get: string;
    parameters: {
      season: string;
      team: string;
    };
    errors?: string[];
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
      referee?: string;
      timezone: string;
      date: string;
      timestamp: number;
      periods: {
        first?: number;
        second?: number;
      };
      venue: {
        id?: number;
        name?: string;
        city?: string;
      };
      status: {
        long: string;
        short: string;
        elapsed?: number;
      };
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo?: string;
      flag?: string;
      season: number;
      round: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo?: string;
        winner?: boolean;
      };
      away: {
        id: number;
        name: string;
        logo?: string;
        winner?: boolean;
      };
    };
    goals: {
      home?: number;
      away?: number;
    };
    score: {
      halftime: {
        home?: number;
        away?: number;
      };
      fulltime: {
        home?: number;
        away?: number;
      };
      extratime: {
        home?: number;
        away?: number;
      };
      penalty: {
        home?: number;
        away?: number;
      };
    };
  }
  