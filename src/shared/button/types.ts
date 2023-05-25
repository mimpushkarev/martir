import { MergeElementProps } from "@types";

export type ButtonPropsType = MergeElementProps<
  "button",
  {
    type?: "primary" | "success" | "danger" | "warning";
    state?: "normal" | "hover" | "disabled";
  }
>;
