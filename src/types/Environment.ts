import { ENVIRONMENTS } from "../constants/Environment";

export type Environment = typeof ENVIRONMENTS[keyof typeof ENVIRONMENTS];
