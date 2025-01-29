const ProfileStats = ({ character }) => {
    return (
      <div className="profile-stats">
        <h3>📊 Štatistiky zo súbojov a misií</h3>
        <p>Vyhrané súboje: {character.battleStats.fightsWon}</p>
        <p>Prehrané súboje: {character.battleStats.fightsLost}</p>
        <p>Splnené misie: {character.battleStats.missionsCompleted}</p>
        <p>Nesplnené misie: {character.battleStats.missionsFailed}</p>
  
        <h3>⚔️ Bojové vlastnosti</h3>
        <p>Šťastie: {character.luck}</p>
        <p>Kritická šanca: {character.criticalChance}%</p>
        <p>Kritické poškodenie: {character.criticalDamage}%</p>
  
        <h3>🔥 Odolnosti</h3>
        <p>Oheň: {character.resistances.fire}%</p>
        <p>Ľad: {character.resistances.ice}%</p>
        <p>Jed: {character.resistances.poison}%</p>
      </div>
    );
  };
  
  export default ProfileStats;