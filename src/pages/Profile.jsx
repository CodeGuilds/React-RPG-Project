import { useState } from "react";
import characterData from "../data/characterData";
import CharacterCard from "../components/CharacterCard";
import ProfileStats from "../components/ProfileStats";
import Achievements from "../components/Achievements";
import Inventory from "../components/Inventory"; // Nový komponent
import styles from "./Profile.module.css"; // Import CSS modulu

const Profile = () => {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className={styles.profileContainer}>
      <h2>Profil hráča: {characterData.name}</h2>
      <CharacterCard character={characterData} />

      {/* Navigačné tlačidlá pre taby */}
      <div className={styles.profileTabs}>
        <button 
          className={activeTab === "stats" ? styles.active : ""}
          onClick={() => setActiveTab("stats")}
        >
          📊 Štatistiky
        </button>

        <button 
          className={activeTab === "achievements" ? styles.active : ""}
          onClick={() => setActiveTab("achievements")}
        >
          🏆 Achievementy
        </button>
        <button className={activeTab === "inventory" ? "active" : ""} onClick={() => setActiveTab("inventory")}>
          🎒 Inventár
        </button>
      </div>

      {/* Obsah aktívnej karty */}
      <div className={styles.profileContent}>
        {activeTab === "stats" && <ProfileStats character={characterData} />}
        {activeTab === "achievements" && <Achievements achievements={characterData.achievements} />}
        {activeTab === "inventory" && <Inventory inventory={characterData.inventory} />}
      </div>
    </div>
  );
};

export default Profile;