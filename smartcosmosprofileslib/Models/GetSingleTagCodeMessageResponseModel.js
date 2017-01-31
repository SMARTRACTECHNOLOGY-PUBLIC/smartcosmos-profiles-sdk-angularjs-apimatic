/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetSingleTagCodeMessageResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetSingleTagCodeMessageResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetSingleTagCodeMessageResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.message = null;
                } else {
                    this.code = obj.code;
                    this.message = obj.message;
                }
            }
    
            GetSingleTagCodeMessageResponseModel.prototype = new BaseModel();
            GetSingleTagCodeMessageResponseModel.prototype.constructor = GetSingleTagCodeMessageResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetSingleTagCodeMessageResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetSingleTagCodeMessageResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetSingleTagCodeMessageResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            GetSingleTagCodeMessageResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            return GetSingleTagCodeMessageResponseModel;
        }
    ]);

}(angular));
