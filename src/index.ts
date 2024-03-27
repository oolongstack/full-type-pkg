import { each } from "underscore";

export * from "./components/shared.js";
export * from "./components/client.js";

const array = [1, 2, 3];

each(array, (item) => {
  console.log(item);
});
