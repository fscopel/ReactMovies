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
/**
 *
 * @export
 * @interface TmdbImages
 */
export interface TmdbImages {
  /**
   *
   * @type {string}
   * @memberof TmdbImages
   */
  baseUrl?: string | null;
  /**
   *
   * @type {string}
   * @memberof TmdbImages
   */
  secureBaseUrl?: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbImages
   */
  backdropSizes?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbImages
   */
  logoSizes?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbImages
   */
  posterSizes?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbImages
   */
  profileSizes?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof TmdbImages
   */
  stillSizes?: Array<string> | null;
}

/**
 * Check if a given object implements the TmdbImages interface.
 */
export function instanceOfTmdbImages(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function TmdbImagesFromJSON(json: any): TmdbImages {
  return TmdbImagesFromJSONTyped(json, false);
}

export function TmdbImagesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TmdbImages {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    baseUrl: !exists(json, "base_url") ? undefined : json["base_url"],
    secureBaseUrl: !exists(json, "secure_base_url")
      ? undefined
      : json["secure_base_url"],
    backdropSizes: !exists(json, "backdrop_sizes")
      ? undefined
      : json["backdrop_sizes"],
    logoSizes: !exists(json, "logo_sizes") ? undefined : json["logo_sizes"],
    posterSizes: !exists(json, "poster_sizes")
      ? undefined
      : json["poster_sizes"],
    profileSizes: !exists(json, "profile_sizes")
      ? undefined
      : json["profile_sizes"],
    stillSizes: !exists(json, "still_sizes") ? undefined : json["still_sizes"],
  };
}

export function TmdbImagesToJSON(value?: TmdbImages | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    base_url: value.baseUrl,
    secure_base_url: value.secureBaseUrl,
    backdrop_sizes: value.backdropSizes,
    logo_sizes: value.logoSizes,
    poster_sizes: value.posterSizes,
    profile_sizes: value.profileSizes,
    still_sizes: value.stillSizes,
  };
}