import "./Card.css";

export default function Card(props) {
  const { href, title, body, tags, dateAdded } = props;

  const isNew = () => {
    if (!dateAdded) return false;
    
    const addedDate = new Date(dateAdded);
    const today = new Date();
    const differenceInTime = today.getTime() - addedDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    
    return differenceInDays <= 30;
  };

  return (
    <li className="link-card">
      <a href={href}>
        <strong className="nu-u-mt-1 nu-u-mb-1">{title}</strong>
        <p className="nu-c-fs-small nu-u-mt-1 nu-u-mb-1 card-body">{body}</p>
        {/* <p className="distribution">
          {isNew() && <span className="tag nu-u-me-2 tag-new" title="Recently added" aria-label="New item">🔥</span>}
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </p> */}
      </a>
    </li>
  );
}
