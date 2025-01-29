import { useState, useEffect } from "react";
import characterData from "../data/characterData";
import styles from "./Battle.module.css";

const generateEnemy = () => {
  const enemies = [
    { name: "Ork", hp: 100, attack: 12, defense: 5 },
    { name: "Temný mág", hp: 80, attack: 15, defense: 3 },
    { name: "Vlkodlak", hp: 120, attack: 10, defense: 8 },
  ];
  return enemies[Math.floor(Math.random() * enemies.length)];
};

const Battle = () => {
  const player = { ...characterData }; // Hráčove štatistiky
  const [enemy, _] = useState(generateEnemy());
  const [playerHp, setPlayerHp] = useState(player.hp);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);
  const [message, setMessage] = useState("Súboj začína! Vyber útok.");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const playerAttack = (attackType) => {
    if (!isPlayerTurn) return;

    let damage;
    if (attackType === "basic") {
      damage = player.strength - enemy.defense;
    } else if (attackType === "strong") {
      damage = (player.strength * 1.5) - enemy.defense;
    }

    damage = Math.max(damage, 0); // Nezáporné poškodenie
    setEnemyHp((prev) => Math.max(prev - damage, 0));
    setMessage(`Zasiahol si ${enemy.name} za ${damage} poškodenia!`);

    setIsPlayerTurn(false); // Teraz je na rade nepriateľ
  };

  useEffect(() => {
    if (enemyHp === 0) {
      setMessage(`🎉 Porazil si ${enemy.name}!`);
      return;
    }

    if (!isPlayerTurn) {
      setTimeout(() => {
        const enemyDamage = Math.max(enemy.attack - player.defense, 0);
        setPlayerHp((prev) => Math.max(prev - enemyDamage, 0));
        setMessage(`${enemy.name} ťa zasiahol za ${enemyDamage} poškodenia!`);
        setIsPlayerTurn(true);
      }, 1000);
    }
  }, [enemyHp, isPlayerTurn]);

  useEffect(() => {
    if (playerHp === 0) {
      setMessage(`💀 Bol si porazený!`);
    }
  }, [playerHp]);

  return (
    <div className={styles.battleContainer}>
      <h2>⚔️ Bojová aréna</h2>
      <p>{message}</p>

      <div className={styles.battleInfo}>
        <div className={styles.player}>
          <h3>🧑 {player.name}</h3>
          <p>HP: {playerHp}/{player.maxHp}</p>
        </div>

        <div className={styles.enemy}>
          <h3>👹 {enemy.name}</h3>
          <p>HP: {enemyHp}/{enemy.hp}</p>
        </div>
      </div>

      {playerHp > 0 && enemyHp > 0 && isPlayerTurn && (
        <div className={styles.battleActions}>
          <button onClick={() => playerAttack("basic")}>🗡 Základný útok</button>
          <button onClick={() => playerAttack("strong")}>🔥 Silný útok</button>
        </div>
      )}
    </div>
  );
};

export default Battle;