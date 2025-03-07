import { useMemo } from "react";
import Card from "./Card";
import "./CardsContainer.css";
import data from "../data/tools.json";

export default function CardsContainer({ filter }) {
  const filteredCards = useMemo(() => {
    return data.tools
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter((item) => filter === "all" || filter === item.category)
      .flatMap((item) => item.content)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [filter]);

  return (
    <section>
      <ul role="list" className="link-card-grid">
        {filteredCards.map(({ url, title, body, tags, "date-added": dateAdded }, i) => (
          <Card
            key={`${title}-${i}`}
            href={url}
            title={title}
            body={body}
            tags={tags}
            dateAdded={dateAdded}
          />
        ))}
      </ul>
    </section>
  );
}
