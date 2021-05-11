import { useRef } from "react";

function Input({ setTags, defCity }) {
  const input = useRef(false);
  function handle() {
    let tags = defCity.filter((tag) => {
      return new RegExp("\\b" + tag + "\\b").test(
        input.current.value.toLowerCase()
      );
    });
    input.current.value = tags.join(" ");
    setTags(tags);
  }

  return (
    <div className="input">
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          ref={input}
          defaultValue="arbre lyon toulouse maison"
        />
        <button onClick={handle}>OK</button>
      </label>
    </div>
  );
}
export default Input;
