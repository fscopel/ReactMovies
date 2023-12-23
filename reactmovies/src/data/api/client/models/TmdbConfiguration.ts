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

import { exists, mapValues } from "../runtime";
import type { TmdbImages } from "./TmdbImages";
import {
  TmdbImagesFromJSON,
  TmdbImagesFromJSONTyped,
  TmdbImagesToJSON,
} from "./TmdbImages";

/**
 *
 * @export
 * @interface TmdbConfiguration
 */
export interface TmdbConfiguration {
  /**
   *
   * @type {TmdbImages}
   * @memberof TmdbConfiguration
   */
  images?: TmdbImages;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbConfiguration
   */
  changeKeys?: Array<string> | null;
}

/**
 * Check if a given object implements the TmdbConfiguration interface.
 */
export function instanceOfTmdbConfiguration(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function TmdbConfigurationFromJSON(json: any): TmdbConfiguration {
  return TmdbConfigurationFromJSONTyped(json, false);
}

export function TmdbConfigurationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TmdbConfiguration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    images: !exists(json, "images")
      ? undefined
      : TmdbImagesFromJSON(json["images"]),
    changeKeys: !exists(json, "change_keys") ? undefined : json["change_keys"],
  };
}

export function TmdbConfigurationToJSON(value?: TmdbConfiguration | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    images: TmdbImagesToJSON(value.images),
    change_keys: value.changeKeys,
  };
}