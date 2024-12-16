export default function Main() {
  return (
    <main className="main">
      <form className="add-ingredient-form">
        <input
          type="text"
          name="query"
          placeholder="e.g oregano"
          aria-label="Add ingrediend"
        />
        <button type="submit">Add ingredient</button>
      </form>
    </main>
  );
}
