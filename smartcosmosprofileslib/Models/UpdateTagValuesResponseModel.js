/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UpdateTagValuesResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('UpdateTagValuesResponseModel', ['BaseModel',
        function (BaseModel) {
            var UpdateTagValuesResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            UpdateTagValuesResponseModel.prototype = new BaseModel();
            UpdateTagValuesResponseModel.prototype.constructor = UpdateTagValuesResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            UpdateTagValuesResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            UpdateTagValuesResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            UpdateTagValuesResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            UpdateTagValuesResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return UpdateTagValuesResponseModel;
        }
    ]);

}(angular));
