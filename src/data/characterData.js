const characterData = {
    id: 1,
    name: "Arthas Shadowblade",
    level: 12,
    class: "Warrior",
    hp: 240,
    maxHp: 300,
    mana: 50,
    maxMana: 80,
    stamina: 120, 
    strength: 18,
    defense: 12,
    agility: 9,
    intelligence: 7,
    luck: 6, 
    gold: 250,
    experience: 3500,
    nextLevelExp: 5000,
    criticalChance: 10, 
    criticalDamage: 150, 
    
    // Odolnosti voči elementom
    resistances: {
      fire: 5,   
      ice: 10,   
      poison: 20 
    },
  
    // Aktuálna reputácia (môže byť kladná / záporná)
    reputation: {
      global: 50, // Všeobecná reputácia
      faction1: -10, // Napríklad temná frakcia
      faction2: 30  // Napríklad kráľovstvo svetla
    },
  
    skills: [
      { id: 1, name: "Berserk", effect: "+50% damage na 10 sekúnd" },
      { id: 2, name: "Shield Block", effect: "Redukuje fyzické poškodenie o 30%" },
      { id: 3, name: "Battle Cry", effect: "+10% Attack Power pre celý tím" }
    ],
  
    // Aktívne buffy a debuffy
    statusEffects: [
      { id: 1, name: "🔥 Burning", duration: 3, effect: "-5 HP za sekundu" },
      { id: 2, name: "🛡 Fortified", duration: 5, effect: "+10% obrana" }
    ],
  
    inventory: [
      { id: 1, name: "🗡 Meč krvavého draka", type: "Zbraň", damage: 25, critChance: 5 },
      { id: 2, name: "🛡 Štít temných legiend", type: "Brnenie", defense: 15 },
      { id: 3, name: "🧪 Elixír zdravia", type: "Liečivo", effect: "Obnoví 50 HP" },
      { id: 4, name: "🔮 Magický amulet", type: "Doplnok", effect: "+5 mana" },
    ],
  
    achievements: [
      { id: 1, name: "🏆 Prvá výhra v súboji" },
      { id: 2, name: "🔥 Zničenie draka v Temnom lese" },
      { id: 3, name: "💰 Nazbieraných 1000 zlatých mincí" },
    ],
  
    battleStats: {
      fightsWon: 30,
      fightsLost: 5,
      missionsCompleted: 15,
      missionsFailed: 3
    }
  };
  
  export default characterData;