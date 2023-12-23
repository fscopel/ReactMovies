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
 * @interface NewReleaseResult
 */
export interface NewReleaseResult {
  /**
   *
   * @type {boolean}
   * @memberof NewReleaseResult
   */
  adult?: boolean;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  backdropPath?: string | null;
  /**
   *
   * @type {Array<number>}
   * @memberof NewReleaseResult
   */
  genreIds?: Array<number> | null;
  /**
   *
   * @type {number}
   * @memberof NewReleaseResult
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  originalLanguage?: string | null;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  originalTitle?: string | null;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  overview?: string | null;
  /**
   *
   * @type {number}
   * @memberof NewReleaseResult
   */
  popularity?: number;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  posterPath?: string | null;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  releaseDate?: string | null;
  /**
   *
   * @type {string}
   * @memberof NewReleaseResult
   */
  title?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof NewReleaseResult
   */
  video?: boolean;
  /**
   *
   * @type {number}
   * @memberof NewReleaseResult
   */
  voteAverage?: number;
  /**
   *
   * @type {number}
   * @memberof NewReleaseResult
   */
  voteCount?: number;
}

/**
 * Check if a given object implements the NewReleaseResult interface.
 */
export function instanceOfNewReleaseResult(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function NewReleaseResultFromJSON(json: any): NewReleaseResult {
  return NewReleaseResultFromJSONTyped(json, false);
}

export function NewReleaseResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): NewReleaseResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    adult: !exists(json, "adult") ? undefined : json["adult"],
    backdropPath: !exists(json, "backdrop_path")
      ? undefined
      : json["backdrop_path"],
    genreIds: !exists(json, "genre_ids") ? undefined : json["genre_ids"],
    id: !exists(json, "id") ? undefined : json["id"],
    originalLanguage: !exists(json, "original_language")
      ? undefined
      : json["original_language"],
    originalTitle: !exists(json, "original_title")
      ? undefined
      : json["original_title"],
    overview: !exists(json, "overview") ? undefined : json["overview"],
    popularity: !exists(json, "popularity") ? undefined : json["popularity"],
    posterPath: !exists(json, "poster_path") ? undefined : json["poster_path"],
    releaseDate: !exists(json, "release_date")
      ? undefined
      : json["release_date"],
    title: !exists(json, "title") ? undefined : json["title"],
    video: !exists(json, "video") ? undefined : json["video"],
    voteAverage: !exists(json, "vote_average")
      ? undefined
      : json["vote_average"],
    voteCount: !exists(json, "vote_count") ? undefined : json["vote_count"],
  };
}

export function NewReleaseResultToJSON(value?: NewReleaseResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    adult: value.adult,
    backdrop_path: value.backdropPath,
    genre_ids: value.genreIds,
    id: value.id,
    original_language: value.originalLanguage,
    original_title: value.originalTitle,
    overview: value.overview,
    popularity: value.popularity,
    poster_path: value.posterPath,
    release_date: value.releaseDate,
    title: value.title,
    video: value.video,
    vote_average: value.voteAverage,
    vote_count: value.voteCount,
  };
}
