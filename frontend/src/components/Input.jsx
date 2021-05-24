import { useRef } from "react";

function Input({ setTags, defCity }) {
  const input = useRef(false);
  function handle() {
    // Recupération des tags dans le contenue de l'input grace a un filtre et une Regex.
    let tags = defCity.filter((tag) => {
      return new RegExp("\\b" + tag + "\\b").test(
        input.current.value.toLowerCase()
      );
    });
    // Change la valeur de l'input avec la liste des tags.
    input.current.value = tags.join(" ");
    // Updatele state de Tags avec les trouvés.
    setTags(tags);
  }

  return (
    <div className="input">
      <label htmlFor="search">
        <input type="text" name="search" ref={input} />
        <button onClick={handle}>OK</button>
      </label>
    </div>
  );
}
export default Input;
