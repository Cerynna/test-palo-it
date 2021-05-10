function Tag({ tag, removeTag }) {
  return (
    <div className="tag">
      <div className="text">{tag}</div>
      <div
        className="delete"
        onClick={() => {
          removeTag(tag);
        }}
      ></div>
    </div>
  );
}

export default Tag;
