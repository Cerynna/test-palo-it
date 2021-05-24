import Tag from "./Tag";

function Tags({ tags, setTags }) {
  // Remove un tag dans la liste de tags
  function removeTag(tag) {
    let newFlags = tags.filter((t) => {
      return t !== tag;
    });
    setTags(newFlags);
  }
  return (
    <div className="tags">
      {tags ? (
        tags.map((tag, index) => {
          return <Tag tag={tag} key={`tag-${index}`} removeTag={removeTag} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Tags;
