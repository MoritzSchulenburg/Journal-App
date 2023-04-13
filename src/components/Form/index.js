import { Button } from "../Button/index";
import { Label } from "../Label/index";
import { Input } from "../Input/index";

export function Form() {
  return (
    <form action="submit">
      <h2>NEW ENTRY</h2>
      <Label htmlFor="motto" text="Motto" />
      <Input type="text" name="motto" id="motto" />
      <Label htmlFor="notes" text="Notes" />
      <Input type="text" name="notes" id="notes" />
      <Button />
    </form>
  );
}
