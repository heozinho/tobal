export interface CombatResult {
  playerCasualties: number;
  enemyCasualties: number;
  warProgressShift: number; // positive means player is winning
}

export function calculateCombatTick(
  playerMilitaryStrength: number,
  playerMilitarySpending: number,
  enemyMilitaryStrength: number,
  currentWarProgress: number
): CombatResult {
  // Player effective strength is base strength + bonus from spending budget
  const playerEffectiveStrength = playerMilitaryStrength + (playerMilitarySpending / 2);
  const enemyEffectiveStrength = enemyMilitaryStrength; // Enemy assumes flat strength for now

  // Add RNG variance (-10 to +10)
  const rngShift = Math.floor(Math.random() * 21) - 10;
  const strengthDiff = (playerEffectiveStrength - enemyEffectiveStrength) + rngShift;

  let playerCasualties = 0;
  let enemyCasualties = 0;
  let warProgressShift = 0;

  if (strengthDiff > 20) {
    // Crushing player victory
    warProgressShift = 5;
    playerCasualties = Math.floor(Math.random() * 500) + 100;
    enemyCasualties = Math.floor(Math.random() * 3000) + 1000;
  } else if (strengthDiff > 5) {
    // Player advancing
    warProgressShift = 2;
    playerCasualties = Math.floor(Math.random() * 1500) + 500;
    enemyCasualties = Math.floor(Math.random() * 2000) + 800;
  } else if (strengthDiff > -5) {
    // Stalemate / Bloody trench warfare
    warProgressShift = 0;
    playerCasualties = Math.floor(Math.random() * 3000) + 2000;
    enemyCasualties = Math.floor(Math.random() * 3000) + 2000;
  } else if (strengthDiff > -20) {
    // Enemy advancing
    warProgressShift = -2;
    playerCasualties = Math.floor(Math.random() * 2000) + 800;
    enemyCasualties = Math.floor(Math.random() * 1500) + 500;
  } else {
    // Crushing enemy victory
    warProgressShift = -5;
    playerCasualties = Math.floor(Math.random() * 3000) + 1000;
    enemyCasualties = Math.floor(Math.random() * 500) + 100;
  }

  // Desperation modifier: if a side is losing badly (progress near 0 or 100), they fight harder, 
  // causing more casualties but maybe shifting progress back slightly.
  if (currentWarProgress > 80) {
    // Enemy desperate defense
    playerCasualties += 1000;
    warProgressShift -= 1;
  } else if (currentWarProgress < 20) {
    // Player desperate defense
    enemyCasualties += 1000;
    warProgressShift += 1;
  }

  return {
    playerCasualties,
    enemyCasualties,
    warProgressShift
  };
}
