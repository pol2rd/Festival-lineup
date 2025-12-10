import { useState } from "react";

export interface ShowCardProps {
  artist: string;
  stage: string;
  day: string;
  hour: string;
  ticketsLeft: number;
  image: string;
}

export default function ShowCard(
  /* TODO 1: לקבל כאן props עם טיפוס ShowCardProps */
) {
  // TODO 2: ליצור state בשם isInterested מסוג boolean (ברירת מחדל false)
  // const [isInterested, setIsInterested] = ...

  // TODO 3: פונקציה שמחליפה true/false ב-isInterested
  // function handleToggleInterested() {}

  // TODO 4: ליצור ticketsStatusText (string):
  // 0 → "SOLD OUT"
  // 1–30 → "Last tickets – hurry up!"
  // >30 → "Tickets available"

  // TODO 5: ליצור טקסט לסטטוס עניין לפי isInterested:
  // false → "You haven't added this show yet"
  // true → "This show is in your interested list 🎟️"

  return (
    <article className="show-card">
      <div className="show-image-wrapper">
        {/* TODO 6: להחליף placeholder ב־<img> אמיתי מה-props */}
        {/* <img src={image} alt={artist} className="show-image" /> */}
        <div className="show-image-placeholder">Image goes here</div>
      </div>

      <header className="show-header">
        <h2 className="show-artist">
          {/* TODO 7: אם isInterested → להציג ⭐ לפני שם האמן */}
          Artist name here
        </h2>
        <p className="show-meta">
          {/* TODO 8: להציג stage, day, hour מה-props */}
          Stage · Day · Hour
        </p>
      </header>

      <section className="show-info">
        <p className="tickets-status">
          {/* TODO 9: להציג את ticketsStatusText */}
          Tickets status text
        </p>

        <p className="interested-status">
          {/* TODO 10: להציג את interestedText */}
          Interested status text
        </p>
      </section>

      <button
        className="interested-button"
        // TODO 11: לחבר onClick לפונקציה handleToggleInterested
      >
        {/* TODO 12: טקסט הכפתור:
            false → "Mark as interested"
            true  → "Remove from my list"
        */}
        Button text
      </button>
    </article>
  );
}
