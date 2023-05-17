import { IErrorWithMessage } from "../types";

export const isErrorWithMessage = (e: unknown): e is IErrorWithMessage => {
  return (
    typeof e === "object" &&
    e !== null &&
    "data" in e &&
    typeof (e as Record<string, unknown>).data === "object"
  );
};
