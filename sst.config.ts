import { SSTConfig } from "sst";
import { Web } from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "serverless-lawncare-saas",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Web);
  },
} satisfies SSTConfig;
