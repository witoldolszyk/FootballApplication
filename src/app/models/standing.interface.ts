export interface Standing {
    get: string;
    parameters: {
        league: string;
        season: string;
    };
    errors: any[];  
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: Response[];
}

interface Response {
    league: League;    
}

interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: TeamStandings[][];
}

export interface TeamStandings {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string | null;
    all: TeamPerformance;
    home: TeamPerformance;
    away: TeamPerformance;
    update: string;
}

interface Team {
    id: number;
    name: string;
    logo: string;
}

interface TeamPerformance {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
        for: number;
        against: number;
    };
}
