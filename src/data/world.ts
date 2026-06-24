export interface InitialNationData {
  name: string;
  leaderName: string;
  gdpPerCapita: number;
  militaryStrength: number;
  stability: number;
  governmentType: 'Democracy' | 'Autocracy' | 'Theocracy' | 'Monarchy';
  color: string;
}

export const initialWorldNations: InitialNationData[] = [
  { name: 'United States', leaderName: 'Bill Clinton', gdpPerCapita: 36000, militaryStrength: 100, stability: 85, governmentType: 'Democracy', color: '#1a5276' },
  { name: 'China', leaderName: 'Jiang Zemin', gdpPerCapita: 950, militaryStrength: 85, stability: 70, governmentType: 'Autocracy', color: '#cb4335' },
  { name: 'Russia', leaderName: 'Vladimir Putin', gdpPerCapita: 1700, militaryStrength: 80, stability: 60, governmentType: 'Autocracy', color: '#922b21' },
  { name: 'United Kingdom', leaderName: 'Tony Blair', gdpPerCapita: 28000, militaryStrength: 75, stability: 80, governmentType: 'Democracy', color: '#2874a6' },
  { name: 'France', leaderName: 'Jacques Chirac', gdpPerCapita: 24000, militaryStrength: 70, stability: 75, governmentType: 'Democracy', color: '#2e86c1' },
  { name: 'Germany', leaderName: 'Gerhard Schröder', gdpPerCapita: 23000, militaryStrength: 65, stability: 85, governmentType: 'Democracy', color: '#f1c40f' },
  { name: 'Japan', leaderName: 'Yoshiro Mori', gdpPerCapita: 38000, militaryStrength: 60, stability: 90, governmentType: 'Democracy', color: '#e74c3c' },
  { name: 'India', leaderName: 'Atal Bihari Vajpayee', gdpPerCapita: 450, militaryStrength: 75, stability: 65, governmentType: 'Democracy', color: '#e67e22' },
  { name: 'Brazil', leaderName: 'Fernando Henrique Cardoso', gdpPerCapita: 3700, militaryStrength: 50, stability: 60, governmentType: 'Democracy', color: '#229954' },
  { name: 'Iran', leaderName: 'Mohammad Khatami', gdpPerCapita: 1800, militaryStrength: 55, stability: 50, governmentType: 'Theocracy', color: '#148f77' },
  { name: 'Saudi Arabia', leaderName: 'King Fahd', gdpPerCapita: 8500, militaryStrength: 60, stability: 70, governmentType: 'Monarchy', color: '#196f3d' },
  { name: 'South Korea', leaderName: 'Kim Dae-jung', gdpPerCapita: 12000, militaryStrength: 65, stability: 75, governmentType: 'Democracy', color: '#21618c' },
  { name: 'North Korea', leaderName: 'Kim Jong-il', gdpPerCapita: 300, militaryStrength: 70, stability: 40, governmentType: 'Autocracy', color: '#7b241c' },
  { name: 'Israel', leaderName: 'Ehud Barak', gdpPerCapita: 21000, militaryStrength: 80, stability: 60, governmentType: 'Democracy', color: '#3498db' },
  { name: 'Egypt', leaderName: 'Hosni Mubarak', gdpPerCapita: 1400, militaryStrength: 55, stability: 65, governmentType: 'Autocracy', color: '#d4ac0d' },
  { name: 'South Africa', leaderName: 'Thabo Mbeki', gdpPerCapita: 3000, militaryStrength: 45, stability: 55, governmentType: 'Democracy', color: '#27ae60' },
  { name: 'Mexico', leaderName: 'Ernesto Zedillo', gdpPerCapita: 5800, militaryStrength: 40, stability: 50, governmentType: 'Democracy', color: '#1e8449' },
  { name: 'Pakistan', leaderName: 'Pervez Musharraf', gdpPerCapita: 500, militaryStrength: 65, stability: 40, governmentType: 'Autocracy', color: '#117a65' },
  { name: 'Turkey', leaderName: 'Bülent Ecevit', gdpPerCapita: 4200, militaryStrength: 70, stability: 55, governmentType: 'Democracy', color: '#c0392b' },
  { name: 'Indonesia', leaderName: 'Abdurrahman Wahid', gdpPerCapita: 800, militaryStrength: 50, stability: 45, governmentType: 'Democracy', color: '#a93226' }
];
