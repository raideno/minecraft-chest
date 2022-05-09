export default interface ItemInterface {
  id: string;
  size: number;
  name: string;
  type: "empty" | "text" | "link" | "custom";
}
