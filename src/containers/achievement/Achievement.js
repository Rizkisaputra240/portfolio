import React, {useState, useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [showAll, setShowAll] = useState(false);

  if (!achievementSection.display) {
    return null;
  }

  // Menampilkan 3 kartu saat awal, atau semua kartu saat showAll bernilai true
  const displayedCards = showAll
    ? achievementSection.achievementsCards
    : achievementSection.achievementsCards.slice(0, 3);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-cards-div">
            {displayedCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>

          {/* Tombol Toggle Tampilkan Semua / Lebih Sedikit */}
          {achievementSection.achievementsCards.length > 3 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2.5rem"
              }}
            >
              <button
                className="main-button"
                onClick={() => setShowAll(!showAll)}
                style={{cursor: "pointer", border: "none"}}
              >
                {showAll
                  ? "Tampilkan Lebih Sedikit"
                  : "Tampilkan Semua Sertifikat"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
