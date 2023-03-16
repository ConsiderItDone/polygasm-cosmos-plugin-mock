import { Module, manifest } from "./wrap";

import { PluginFactory } from "@polywrap/core-js";

export interface CosmosPluginConfig {
  defaultValue: string;
}

export class CosmosPlugin extends Module<CosmosPluginConfig> {
  constructor(config: CosmosPluginConfig) {
    super(config);
  }
}

export const cosmosPlugin: PluginFactory<CosmosPluginConfig> = (
  config: CosmosPluginConfig
) => {
  return {
    factory: () => new CosmosPlugin(config),
    manifest: manifest
  };
};

export const plugin = cosmosPlugin;
