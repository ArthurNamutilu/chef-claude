export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsListItem = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main className="main">
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g oregano"
          aria-label="Add ingrediend"
        />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>{ingredientsListItem}</ul>
    </main>
  );
}
