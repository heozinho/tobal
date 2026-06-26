import { CountryStats, Budget, Factions, Minister } from '@/store/gameStore';

export interface CountryOption {
  name: string;
  code: string;
  difficulty: 1 | 2 | 3;
  minLeaderAge: number;
  description: string;
  stats: CountryStats;
  budget: Budget;
  factions: Factions;
  ministers: Minister[];
}

export const gameCountries: CountryOption[] = [
  {
    "name": "United States",
    "difficulty": 1,
    "minLeaderAge": 35,
    "description": "Superpower with deep divides, complex coalition politics.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "us"
  },
  {
    "name": "Russia",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Authoritarian pressures, oligarchic influence, post-Soviet fragility.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ru"
  },
  {
    "name": "China",
    "difficulty": 2,
    "minLeaderAge": 45,
    "description": "Rapid economic growth, strict one-party rule, increasing global integration.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cn"
  },
  {
    "name": "United Kingdom",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Stable democracy, strong economy, debates over European integration.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "gb"
  },
  {
    "name": "France",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Strong centralized state, frequent protests, European pillar.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "fr"
  },
  {
    "name": "Germany",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Economic powerhouse, dealing with the long-term costs of reunification.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "de"
  },
  {
    "name": "Japan",
    "difficulty": 1,
    "minLeaderAge": 25,
    "description": "Technological leader facing the 'Lost Decade' of economic stagnation.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "jp"
  },
  {
    "name": "India",
    "difficulty": 2,
    "minLeaderAge": 25,
    "description": "Massive population, fast growth, complex multi-party democracy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "in"
  },
  {
    "name": "Brazil",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Emerging economy, stark inequality, transitioning democracy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "br"
  },
  {
    "name": "South Africa",
    "difficulty": 2,
    "minLeaderAge": 18,
    "description": "Post-apartheid nation building, high unemployment, HIV/AIDS crisis.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "za"
  },
  {
    "name": "Canada",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Wealthy, stable, resource-rich, dealing with regionalism.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ca"
  },
  {
    "name": "Australia",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Prosperous, isolated, commodity-driven economy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "au"
  },
  {
    "name": "Mexico",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Recent democratic transition, rising cartel influence, NAFTA effects.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "mx"
  },
  {
    "name": "Italy",
    "difficulty": 2,
    "minLeaderAge": 50,
    "description": "Frequent government changes, north-south divide, high debt.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "it"
  },
  {
    "name": "Spain",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Growing economy, regional autonomy debates, Eurozone integration.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "es"
  },
  {
    "name": "South Korea",
    "difficulty": 1,
    "minLeaderAge": 40,
    "description": "Recovering from Asian financial crisis, rapid tech growth, North Korean threat.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "kr"
  },
  {
    "name": "Indonesia",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Post-Suharto democratic transition, separatist movements, economic recovery.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "id"
  },
  {
    "name": "Turkey",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Secular state with rising religious politics, military influence, EU aspirations.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "tr"
  },
  {
    "name": "Saudi Arabia",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Absolute monarchy, immense oil wealth, conservative religious society.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sa"
  },
  {
    "name": "Iran",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Theocracy, reformist president facing conservative backlash, sanctioned.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ir"
  },
  {
    "name": "Nigeria",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Newly democratic, massive oil wealth but high corruption, ethnic divisions.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ng"
  },
  {
    "name": "Egypt",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Authoritarian stability, population pressures, regional linchpin.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "eg"
  },
  {
    "name": "Pakistan",
    "difficulty": 3,
    "minLeaderAge": 45,
    "description": "Recent military coup, nuclear power, volatile neighborhood.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pk"
  },
  {
    "name": "Argentina",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Approaching severe economic crisis, political instability.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ar"
  },
  {
    "name": "Colombia",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Intense conflict with FARC and cartels, US aid increasing.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "co"
  },
  {
    "name": "Venezuela",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Early years of the Bolivarian Revolution, deep political polarization.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ve"
  },
  {
    "name": "North Korea",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Totalitarian state, severe famine aftermath, developing nuclear program.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "kp"
  },
  {
    "name": "Cuba",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Communist state, struggling after Soviet collapse, US embargo.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cu"
  },
  {
    "name": "Vietnam",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Communist party rule, Doi Moi economic reforms taking off.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "vn"
  },
  {
    "name": "Israel",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "High tech economy, Second Intifada beginning, intense security focus.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "il"
  },
  {
    "name": "Sweden",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Strong welfare state, high taxation, non-aligned.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "se"
  },
  {
    "name": "Norway",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Wealthy, stable, high-trust society, massive oil fund.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "no"
  },
  {
    "name": "Denmark",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Prosperous, egalitarian, 'flexicurity' model.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "dk"
  },
  {
    "name": "Finland",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Tech boom driven by Nokia, recovering from 90s recession.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "fi"
  },
  {
    "name": "Netherlands",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Polder model of consensus, progressive social policies.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "nl"
  },
  {
    "name": "Belgium",
    "difficulty": 2,
    "minLeaderAge": 18,
    "description": "Complex federalism, linguistic divides, EU headquarters.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "be"
  },
  {
    "name": "Switzerland",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Direct democracy, wealthy, strictly neutral.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ch"
  },
  {
    "name": "Austria",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Stable economy, controversial right-wing coalition in power.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "at"
  },
  {
    "name": "Greece",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Preparing for Euro entry and 2004 Olympics, high debt.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "gr"
  },
  {
    "name": "Portugal",
    "difficulty": 1,
    "minLeaderAge": 35,
    "description": "EU integration bringing rapid modernization.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pt"
  },
  {
    "name": "Ireland",
    "difficulty": 1,
    "minLeaderAge": 35,
    "description": "Celtic Tiger era, rapid economic boom, peace process in North.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ie"
  },
  {
    "name": "New Zealand",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Stable, isolated, agricultural exporter, progressive policies.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "nz"
  },
  {
    "name": "Philippines",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Political instability, Estrada impeachment looming, insurgencies.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ph"
  },
  {
    "name": "Thailand",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Recovering from 1997 crisis, new constitution, emerging populist politics.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "th"
  },
  {
    "name": "Malaysia",
    "difficulty": 2,
    "minLeaderAge": 18,
    "description": "Recovering from Asian crisis, strong Mahathir rule, ethnic politics.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "my"
  },
  {
    "name": "Singapore",
    "difficulty": 1,
    "minLeaderAge": 21,
    "description": "Highly developed, strict laws, one-party dominance.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sg"
  },
  {
    "name": "Taiwan",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "First peaceful transition of power, high tech, China tensions.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "tw"
  },
  {
    "name": "Poland",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Rapid post-communist transition, preparing for EU membership.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pl"
  },
  {
    "name": "Hungary",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Successful post-communist transition, joining NATO.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "hu"
  },
  {
    "name": "Czech Republic",
    "difficulty": 1,
    "minLeaderAge": 40,
    "description": "Stable post-communist state, industrialized, joining NATO.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cz"
  },
  {
    "name": "Romania",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Struggling transition, high inflation, aspiring to EU/NATO.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ro"
  },
  {
    "name": "Ukraine",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Oligarchic politics, balancing between Russia and West, economic struggles.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ua"
  },
  {
    "name": "Kazakhstan",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Authoritarian rule, massive oil wealth, vast territory.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "kz"
  },
  {
    "name": "Uzbekistan",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Strict authoritarianism, cotton economy, security concerns.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "uz"
  },
  {
    "name": "Iraq",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Under severe UN sanctions, Saddam Hussein rule, impoverished population.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "iq"
  },
  {
    "name": "Syria",
    "difficulty": 3,
    "minLeaderAge": 34,
    "description": "Bashar al-Assad recently took power, Ba'athist state, stagnant economy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sy"
  },
  {
    "name": "Jordan",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "New King Abdullah II, stable but resource-poor, Palestinian refugee population.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "jo"
  },
  {
    "name": "Lebanon",
    "difficulty": 3,
    "minLeaderAge": 21,
    "description": "Post-civil war reconstruction, Syrian occupation ending soon, sectarian system.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "lb"
  },
  {
    "name": "Morocco",
    "difficulty": 2,
    "minLeaderAge": 18,
    "description": "New King Mohammed VI, gradual reforms, Western Sahara dispute.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ma"
  },
  {
    "name": "Algeria",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Emerging from brutal civil war, military dominance, oil reliant.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "dz"
  },
  {
    "name": "Kenya",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Moi era ending, corruption issues, regional economic hub.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ke"
  },
  {
    "name": "Tanzania",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Stable, very poor, gradual economic liberalization.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "tz"
  },
  {
    "name": "Ethiopia",
    "difficulty": 3,
    "minLeaderAge": 21,
    "description": "Border war with Eritrea ending, deep poverty, dominant party state.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "et"
  },
  {
    "name": "Ghana",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Democratic success story in West Africa, peaceful transition of power in 2000.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "gh"
  },
  {
    "name": "Ivory Coast",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Recent military coup, approaching civil war, cocoa reliant.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ci"
  },
  {
    "name": "Democratic Republic of the Congo",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "In the midst of the Second Congo War, devastated infrastructure.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cd"
  },
  {
    "name": "Angola",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Long civil war ongoing, immense oil and diamond wealth funding conflict.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ao"
  },
  {
    "name": "Zimbabwe",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Land invasions beginning, severe economic decline starting under Mugabe.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "zw"
  },
  {
    "name": "Chile",
    "difficulty": 1,
    "minLeaderAge": 35,
    "description": "Most stable economy in South America, consolidating post-Pinochet democracy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cl"
  },
  {
    "name": "Peru",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Fujimori fleeing, democratic transition beginning, recovering from Shining Path.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pe"
  },
  {
    "name": "Ecuador",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Severe economic crisis, dollarization adopted in 2000, political instability.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ec"
  },
  {
    "name": "Bolivia",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Poorest in South America, Water War in Cochabamba (2000), indigenous movements rising.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "bo"
  },
  {
    "name": "Uruguay",
    "difficulty": 1,
    "minLeaderAge": 18,
    "description": "Stable democracy, strong welfare state, affected by neighbors' crises.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "uy"
  },
  {
    "name": "Paraguay",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Fragile democracy, recent assassination of VP, high corruption.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "py"
  },
  {
    "name": "Afghanistan",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Ruled by Taliban, harboring Al-Qaeda, devastating poverty and drought.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "af"
  },
  {
    "name": "Myanmar",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Ruled by military junta, Aung San Suu Kyi under house arrest, sanctioned.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "mm"
  },
  {
    "name": "Bangladesh",
    "difficulty": 3,
    "minLeaderAge": 25,
    "description": "Frequent strikes, partisan gridlock, vulnerable to climate change, textile hub.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "bd"
  },
  {
    "name": "Sri Lanka",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Ongoing brutal civil war with Tamil Tigers, developing economy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "lk"
  },
  {
    "name": "Nepal",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Maoist insurgency growing, monarchy still powerful, deep poverty.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "np"
  },
  {
    "name": "Serbia",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Milosevic overthrown in late 2000, recovering from NATO bombing, international isolation ending.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "rs"
  },
  {
    "name": "Croatia",
    "difficulty": 2,
    "minLeaderAge": 18,
    "description": "New pro-Western government, post-war recovery, aiming for EU.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "hr"
  },
  {
    "name": "Bosnia and Herzegovina",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Divided nation, heavy international oversight post-war.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ba"
  },
  {
    "name": "Bulgaria",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Pro-Western government managing painful economic reforms.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "bg"
  },
  {
    "name": "Slovakia",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Catching up on EU integration after Meciar era, economic reforms.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sk"
  },
  {
    "name": "Belarus",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Authoritarian rule under Lukashenko, close ties to Russia, isolated from West.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "by"
  },
  {
    "name": "Lithuania",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Rapid reform, aiming for EU and NATO, Baltic tiger.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "lt"
  },
  {
    "name": "Latvia",
    "difficulty": 2,
    "minLeaderAge": 40,
    "description": "Rapid reform, large Russian minority issues, aiming for EU and NATO.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "lv"
  },
  {
    "name": "Estonia",
    "difficulty": 1,
    "minLeaderAge": 40,
    "description": "Pioneering e-government, most successful post-Soviet transition.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ee"
  },
  {
    "name": "Georgia",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Corruption, weak state, frozen conflicts in Abkhazia and South Ossetia.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ge"
  },
  {
    "name": "Armenia",
    "difficulty": 3,
    "minLeaderAge": 25,
    "description": "Recovering from 1999 parliament shooting, Karabakh conflict, blockaded by neighbors.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "am"
  },
  {
    "name": "Azerbaijan",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Authoritarian rule, oil boom beginning, Karabakh conflict.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "az"
  },
  {
    "name": "Yemen",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Poor, tribal, USS Cole bombing (2000), struggling state.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ye"
  },
  {
    "name": "Oman",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Stable absolute monarchy, moderate foreign policy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "om"
  },
  {
    "name": "United Arab Emirates",
    "difficulty": 1,
    "minLeaderAge": 30,
    "description": "Rapid modernization, Dubai becoming global hub, stable monarchy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ae"
  },
  {
    "name": "Qatar",
    "difficulty": 1,
    "minLeaderAge": 30,
    "description": "Massive natural gas wealth, Al Jazeera growing influence, stable monarchy.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "qa"
  },
  {
    "name": "Kuwait",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Recovered from Gulf War, wealthy, vocal parliament but ruling emir.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "kw"
  },
  {
    "name": "Bahrain",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Sectarian tensions, new emir initiating some reforms.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "bh"
  },
  {
    "name": "Jamaica",
    "difficulty": 3,
    "minLeaderAge": 21,
    "description": "High debt, high crime rates, tourism and bauxite dependent.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "jm"
  },
  {
    "name": "Haiti",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Deepest poverty in hemisphere, severe political instability.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ht"
  },
  {
    "name": "Dominican Republic",
    "difficulty": 2,
    "minLeaderAge": 30,
    "description": "Fast-growing economy, tourism hub, inequality.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "do"
  },
  {
    "name": "Guatemala",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Post-civil war reconciliation, high crime, deep poverty.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "gt"
  },
  {
    "name": "Honduras",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Devastated by Hurricane Mitch recently, very poor, crime rising.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "hn"
  },
  {
    "name": "El Salvador",
    "difficulty": 3,
    "minLeaderAge": 30,
    "description": "Post-civil war, gang violence rising, adopting US dollar (2001).",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sv"
  },
  {
    "name": "Nicaragua",
    "difficulty": 3,
    "minLeaderAge": 25,
    "description": "Poor, recovering from 80s war and Hurricane Mitch, corrupt politics.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ni"
  },
  {
    "name": "Costa Rica",
    "difficulty": 1,
    "minLeaderAge": 30,
    "description": "Stable democracy, no army, eco-tourism hub, regional exception.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cr"
  },
  {
    "name": "Panama",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Recently took control of the Canal (1999), growing financial sector.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pa"
  },
  {
    "name": "Papua New Guinea",
    "difficulty": 3,
    "minLeaderAge": 25,
    "description": "Extreme diversity, Bougainville peace process, weak central state.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "pg"
  },
  {
    "name": "Fiji",
    "difficulty": 3,
    "minLeaderAge": 18,
    "description": "Experienced a coup in 2000, ethnic tensions between indigenous and Indian populations.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "fj"
  },
  {
    "name": "Sudan",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Ongoing Second Sudanese Civil War, oil exports beginning, isolated.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sd"
  },
  {
    "name": "Libya",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Gaddafi rule, trying to end international isolation (Lockerbie handover 1999).",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ly"
  },
  {
    "name": "Tunisia",
    "difficulty": 3,
    "minLeaderAge": 40,
    "description": "Authoritarian stability under Ben Ali, good economic growth.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "tn"
  },
  {
    "name": "Senegal",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Peaceful democratic transition in 2000, stable anchor in West Africa.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "sn"
  },
  {
    "name": "Mali",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Functioning democracy but very poor, vast desert north.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ml"
  },
  {
    "name": "Uganda",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Museveni's 'no-party' system, involved in Congo war, successful anti-HIV campaign.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "ug"
  },
  {
    "name": "Rwanda",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Rebuilding post-genocide under Kagame, involved in Congo war.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "rw"
  },
  {
    "name": "Zambia",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Copper dependent, struggling economy, HIV/AIDS crisis.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "zm"
  },
  {
    "name": "Mozambique",
    "difficulty": 2,
    "minLeaderAge": 35,
    "description": "Rapid growth from a very low base post-civil war, devastating floods in 2000.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "mz"
  },
  {
    "name": "Madagascar",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Poor, prone to cyclones, approaching 2001 political crisis.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "mg"
  },
  {
    "name": "Cameroon",
    "difficulty": 3,
    "minLeaderAge": 35,
    "description": "Authoritarian rule under Biya, relatively stable in a volatile region.",
    "stats": {
      "gdpPerCapita": 10000,
      "unemployment": 5.0,
      "inflation": 2.0,
      "nationalDebt": 100,
      "treasury": 50,
      "corruptionLevel": 10,
      "creditRating": "A",
      "militaryStrength": 50,
      "casualties": 0
    },
    "budget": {
      "taxIncomeLow": 15,
      "taxIncomeMiddle": 25,
      "taxIncomeHigh": 35,
      "taxCorp": 20,
      "taxVAT": 10,
      "taxTariffs": 5,
      "spendEducation": 15,
      "spendInfrastructure": 10,
      "spendWelfare": 20,
      "spendMilitary": 10,
      "spendHealth": 15
    },
    "factions": {
      "workingClass": 50,
      "middleClass": 50,
      "business": 50,
      "military": 50,
      "religious": 50,
      "youth": 50
    },
    "ministers": [],
    "code": "cm"
  }
];
