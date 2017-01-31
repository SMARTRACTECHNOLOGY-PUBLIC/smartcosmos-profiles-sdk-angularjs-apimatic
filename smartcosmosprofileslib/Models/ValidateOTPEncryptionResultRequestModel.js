/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ValidateOTPEncryptionResultRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('ValidateOTPEncryptionResultRequestModel', ['BaseModel',
        function (BaseModel) {
            var ValidateOTPEncryptionResultRequestModel = function (obj) {
                if (!obj) {
                    this.otpRequestId = null;
                    this.otpResult = null;
                    this.timestamp = null;
                } else {
                    this.otpRequestId = obj.otpRequestId;
                    this.otpResult = obj.otpResult;
                    this.timestamp = obj.timestamp;
                }
            }
    
            ValidateOTPEncryptionResultRequestModel.prototype = new BaseModel();
            ValidateOTPEncryptionResultRequestModel.prototype.constructor = ValidateOTPEncryptionResultRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            ValidateOTPEncryptionResultRequestModel.prototype.getOtpRequestId = function () {
                return this.otpRequestId;
            };
        
            /**
             * Setter for OtpRequestId
             * 
             * @param {string} value 
             */
            ValidateOTPEncryptionResultRequestModel.prototype.setOtpRequestId = function (value) {
                this.otpRequestId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            ValidateOTPEncryptionResultRequestModel.prototype.getOtpResult = function () {
                return this.otpResult;
            };
        
            /**
             * Setter for OtpResult
             * 
             * @param {int} value 
             */
            ValidateOTPEncryptionResultRequestModel.prototype.setOtpResult = function (value) {
                this.otpResult = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            ValidateOTPEncryptionResultRequestModel.prototype.getTimestamp = function () {
                return this.timestamp;
            };
        
            /**
             * Setter for Timestamp
             * 
             * @param {int} value 
             */
            ValidateOTPEncryptionResultRequestModel.prototype.setTimestamp = function (value) {
                this.timestamp = value;
            };
        
            return ValidateOTPEncryptionResultRequestModel;
        }
    ]);

}(angular));
