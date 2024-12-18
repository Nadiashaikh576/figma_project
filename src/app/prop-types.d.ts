import { Requireable, Validator } from "prop-types";

declare module "prop-types" {
  const PropTypes: {
    [key: string]: Validator<unknown> | Requireable<unknown>;
  };

  export default PropTypes;
}
