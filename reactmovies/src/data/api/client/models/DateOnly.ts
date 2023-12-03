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

import { exists, mapValues } from '../runtime';
import type { DayOfWeek } from './DayOfWeek';
import {
    DayOfWeekFromJSON,
    DayOfWeekFromJSONTyped,
    DayOfWeekToJSON,
} from './DayOfWeek';

/**
 * 
 * @export
 * @interface DateOnly
 */
export interface DateOnly {
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    year?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    month?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    day?: number;
    /**
     * 
     * @type {DayOfWeek}
     * @memberof DateOnly
     */
    dayOfWeek?: DayOfWeek;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    readonly dayOfYear?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    readonly dayNumber?: number;
}

/**
 * Check if a given object implements the DateOnly interface.
 */
export function instanceOfDateOnly(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DateOnlyFromJSON(json: any): DateOnly {
    return DateOnlyFromJSONTyped(json, false);
}

export function DateOnlyFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateOnly {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': !exists(json, 'year') ? undefined : json['year'],
        'month': !exists(json, 'month') ? undefined : json['month'],
        'day': !exists(json, 'day') ? undefined : json['day'],
        'dayOfWeek': !exists(json, 'dayOfWeek') ? undefined : DayOfWeekFromJSON(json['dayOfWeek']),
        'dayOfYear': !exists(json, 'dayOfYear') ? undefined : json['dayOfYear'],
        'dayNumber': !exists(json, 'dayNumber') ? undefined : json['dayNumber'],
    };
}

export function DateOnlyToJSON(value?: DateOnly | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': value.year,
        'month': value.month,
        'day': value.day,
        'dayOfWeek': DayOfWeekToJSON(value.dayOfWeek),
    };
}

