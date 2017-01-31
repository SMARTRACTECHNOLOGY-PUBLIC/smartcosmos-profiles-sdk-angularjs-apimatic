/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetKeysUsedForTagAuthenticationResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetKeysUsedForTagAuthenticationResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetKeysUsedForTagAuthenticationResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            GetKeysUsedForTagAuthenticationResponseModel.prototype = new BaseModel();
            GetKeysUsedForTagAuthenticationResponseModel.prototype.constructor = GetKeysUsedForTagAuthenticationResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetKeysUsedForTagAuthenticationResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetKeysUsedForTagAuthenticationResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetKeysUsedForTagAuthenticationResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            GetKeysUsedForTagAuthenticationResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return GetKeysUsedForTagAuthenticationResponseModel;
        }
    ]);

}(angular));
