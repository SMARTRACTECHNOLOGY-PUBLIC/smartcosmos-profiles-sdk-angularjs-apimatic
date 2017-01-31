/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetOTPAuthenticationChallengeResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetOTPAuthenticationChallengeResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetOTPAuthenticationChallengeResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.message = null;
                    this.otpRequestId = null;
                    this.otpVector = null;
                    this.tagId = null;
                } else {
                    this.code = obj.code;
                    this.message = obj.message;
                    this.otpRequestId = obj.otpRequestId;
                    this.otpVector = obj.otpVector;
                    this.tagId = obj.tagId;
                }
            }
    
            GetOTPAuthenticationChallengeResponseModel.prototype = new BaseModel();
            GetOTPAuthenticationChallengeResponseModel.prototype.constructor = GetOTPAuthenticationChallengeResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.getOtpRequestId = function () {
                return this.otpRequestId;
            };
        
            /**
             * Setter for OtpRequestId
             * 
             * @param {string} value 
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.setOtpRequestId = function (value) {
                this.otpRequestId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.getOtpVector = function () {
                return this.otpVector;
            };
        
            /**
             * Setter for OtpVector
             * 
             * @param {string} value 
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.setOtpVector = function (value) {
                this.otpVector = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.getTagId = function () {
                return this.tagId;
            };
        
            /**
             * Setter for TagId
             * 
             * @param {string} value 
             */
            GetOTPAuthenticationChallengeResponseModel.prototype.setTagId = function (value) {
                this.tagId = value;
            };
        
            return GetOTPAuthenticationChallengeResponseModel;
        }
    ]);

}(angular));
