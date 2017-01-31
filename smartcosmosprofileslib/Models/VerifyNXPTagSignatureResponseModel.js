/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of VerifyNXPTagSignatureResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('VerifyNXPTagSignatureResponseModel', ['BaseModel',
        function (BaseModel) {
            var VerifyNXPTagSignatureResponseModel = function (obj) {
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
    
            VerifyNXPTagSignatureResponseModel.prototype = new BaseModel();
            VerifyNXPTagSignatureResponseModel.prototype.constructor = VerifyNXPTagSignatureResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            VerifyNXPTagSignatureResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            VerifyNXPTagSignatureResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            VerifyNXPTagSignatureResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            VerifyNXPTagSignatureResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            VerifyNXPTagSignatureResponseModel.prototype.getTagId = function () {
                return this.tagId;
            };
        
            /**
             * Setter for TagId
             * 
             * @param {string} value 
             */
            VerifyNXPTagSignatureResponseModel.prototype.setTagId = function (value) {
                this.tagId = value;
            };
        
            return VerifyNXPTagSignatureResponseModel;
        }
    ]);

}(angular));
