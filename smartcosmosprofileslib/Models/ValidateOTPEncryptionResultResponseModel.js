/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ValidateOTPEncryptionResultResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('ValidateOTPEncryptionResultResponseModel', ['BaseModel',
        function (BaseModel) {
            var ValidateOTPEncryptionResultResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.message = null;
                    this.tagId = null;
                } else {
                    this.code = obj.code;
                    this.message = obj.message;
                    this.tagId = obj.tagId;
                }
            }
    
            ValidateOTPEncryptionResultResponseModel.prototype = new BaseModel();
            ValidateOTPEncryptionResultResponseModel.prototype.constructor = ValidateOTPEncryptionResultResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            ValidateOTPEncryptionResultResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            ValidateOTPEncryptionResultResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            ValidateOTPEncryptionResultResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            ValidateOTPEncryptionResultResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            ValidateOTPEncryptionResultResponseModel.prototype.getTagId = function () {
                return this.tagId;
            };
        
            /**
             * Setter for TagId
             * 
             * @param {string} value 
             */
            ValidateOTPEncryptionResultResponseModel.prototype.setTagId = function (value) {
                this.tagId = value;
            };
        
            return ValidateOTPEncryptionResultResponseModel;
        }
    ]);

}(angular));
