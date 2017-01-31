/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetTagMetadataResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetTagMetadataResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetTagMetadataResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            GetTagMetadataResponseModel.prototype = new BaseModel();
            GetTagMetadataResponseModel.prototype.constructor = GetTagMetadataResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetTagMetadataResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetTagMetadataResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetTagMetadataResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            GetTagMetadataResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return GetTagMetadataResponseModel;
        }
    ]);

}(angular));
