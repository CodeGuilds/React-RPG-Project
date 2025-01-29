const CharacterCard = ({ character }) => {
    return (
      <div className="character-card">
        <img src="https://via.placeholder.com/150" alt="Character" />
        <div className="character-stats">
          <h3>{character.name} - Level {character.level}</h3>
          <p>Class: {character.class}</p>
          <p>HP: {character.hp}/{character.maxHp}</p>
          <p>Mana: {character.mana}/{character.maxMana}</p>
          <p>Stamina: {character.stamina}</p>
          <p>Sila: {character.strength}</p>
          <p>Obrana: {character.defense}</p>
          <p>Obratnosť: {character.agility}</p>
          <p>💰 Zlaté mince: {character.gold}</p>
  
          <h3>🛡 Aktívne efekty</h3>
          <ul>
            {character.statusEffects.map((effect) => (
              <li key={effect.id}>
                {effect.name} (Trvanie: {effect.duration} sekúnd) - {effect.effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CharacterCard;