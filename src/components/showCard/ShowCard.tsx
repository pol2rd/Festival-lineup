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
  {artist, stage, day, hour, ticketsLeft, image}: ShowCardProps
) {

  const [isInterested, setIsInterested] = useState(false)

  function handleToggleInterested() {
    setIsInterested(!isInterested)
  }

  const lastTicketsAmount = 30
  const ticketsSoldOut = 0;
  function ticketsStatusText(): string {
     return ticketsLeft === ticketsSoldOut? "SOLD OUT": ticketsLeft > lastTicketsAmount? "Tickets available": "Last tickets – hurry up!"
  }

  const ticketsStatus = ticketsStatusText()

  const interestedStatusText = isInterested? "This show is in your interested list 🎟️": "You haven't added this show yet"

  return (
    <article className="show-card">
      <div className="show-image-wrapper">
        <img src={image} alt={artist} className="show-image" />
        <div className="show-image-placeholder">Image goes here</div>
      </div>

      <header className="show-header">
        <h2 className="show-artist">
          {isInterested && "⭐"} {artist} 
        </h2>
        <p className="show-meta">
          {`${stage} ${day} ${hour}`}
        </p>
      </header>

      <section className="show-info">
        <p className="tickets-status">
          {ticketsStatus}
        </p>

        <p className="interested-status">
          {interestedStatusText}
        </p>
      </section>

      <button
        className="interested-button"
        onClick={handleToggleInterested}
      >
        {isInterested? "Remove from my list": "Mark as interested"}
      </button>
    </article>
  );
}
