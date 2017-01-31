/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetApplicationDataFromTagsResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetApplicationDataFromTagsResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetApplicationDataFromTagsResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            GetApplicationDataFromTagsResponseModel.prototype = new BaseModel();
            GetApplicationDataFromTagsResponseModel.prototype.constructor = GetApplicationDataFromTagsResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetApplicationDataFromTagsResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetApplicationDataFromTagsResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetApplicationDataFromTagsResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            GetApplicationDataFromTagsResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return GetApplicationDataFromTagsResponseModel;
        }
    ]);

}(angular));
