export function Form() {
  return (
    <form action="submit">
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">Motto</label>
      <input type="text" name="motto" id="motto" />
      <label htmlFor="notes">Notes</label>
      <input type="text" name="motto" id="motto" />
      <button>Create</button>
    </form>
  );
}
