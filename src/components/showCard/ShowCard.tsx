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
  /* TODO 1: Accept props with ShowCardProps type here */
) {
  // TODO 2: Create state called isInterested of type boolean (default false)
  // const [isInterested, setIsInterested] = ...

  // TODO 3: Function that toggles true/false in isInterested
  // function handleToggleInterested() {}

  // TODO 4: Create ticketsStatusText (string):
  // 0 → "SOLD OUT"
  // 1–30 → "Last tickets – hurry up!"
  // >30 → "Tickets available"

  // TODO 5: Create text for interest status based on isInterested:
  // false → "You haven't added this show yet"
  // true → "This show is in your interested list 🎟️"

  return (
    <article className="show-card">
      <div className="show-image-wrapper">
        {/* TODO 6: Replace placeholder with real <img> from props */}
        {/* <img src={image} alt={artist} className="show-image" /> */}
        <div className="show-image-placeholder">Image goes here</div>
      </div>

      <header className="show-header">
        <h2 className="show-artist">
          {/* TODO 7: If isInterested → show ⭐ before artist name */}
          "Artist name here"
        </h2>
        <p className="show-meta">
          {/* TODO 8: Display stage, day, hour from props */}
          "Stage · Day · Hour"
        </p>
      </header>

      <section className="show-info">
        <p className="tickets-status">
          {/* TODO 9: Display the ticketsStatusText */}
          "Tickets status text"
        </p>

        <p className="interested-status">
          {/* TODO 10: Display the interestedText */}
          "Interested status text"
        </p>
      </section>

      <button
        className="interested-button"
        // TODO 11: Connect onClick to handleToggleInterested function
      >
        {/* TODO 12: Button text:
            false → "Mark as interested"
            true  → "Remove from my list"
        */}
        "Button text"
      </button>
    </article>
  );
}
