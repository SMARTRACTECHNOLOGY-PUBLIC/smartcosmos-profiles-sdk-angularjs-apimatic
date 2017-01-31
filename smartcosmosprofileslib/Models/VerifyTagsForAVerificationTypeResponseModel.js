/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of VerifyTagsForAVerificationTypeResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('VerifyTagsForAVerificationTypeResponseModel', ['BaseModel',
        function (BaseModel) {
            var VerifyTagsForAVerificationTypeResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            VerifyTagsForAVerificationTypeResponseModel.prototype = new BaseModel();
            VerifyTagsForAVerificationTypeResponseModel.prototype.constructor = VerifyTagsForAVerificationTypeResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            VerifyTagsForAVerificationTypeResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            VerifyTagsForAVerificationTypeResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            VerifyTagsForAVerificationTypeResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            VerifyTagsForAVerificationTypeResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return VerifyTagsForAVerificationTypeResponseModel;
        }
    ]);

}(angular));
