/* tslint:disable */
/* eslint-disable */
/**
 * ReactMoviesAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { TmdbConfiguration } from "../models/index";
import {
  TmdbConfigurationFromJSON,
  TmdbConfigurationToJSON,
} from "../models/index";

/**
 *
 */
export class ConfigurationApi extends runtime.BaseAPI {
  /**
   */
  async apiConfigurationDetailsGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TmdbConfiguration>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/configuration/details`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TmdbConfigurationFromJSON(jsonValue),
    );
  }

  /**
   */
  async apiConfigurationDetailsGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TmdbConfiguration> {
    const response = await this.apiConfigurationDetailsGetRaw(initOverrides);
    return await response.value();
  }
}
