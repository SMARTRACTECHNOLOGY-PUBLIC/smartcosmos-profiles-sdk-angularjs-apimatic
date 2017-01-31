/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetVerificationStateMessageResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetVerificationStateMessageResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetVerificationStateMessageResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.message = null;
                } else {
                    this.code = obj.code;
                    this.message = obj.message;
                }
            }
    
            GetVerificationStateMessageResponseModel.prototype = new BaseModel();
            GetVerificationStateMessageResponseModel.prototype.constructor = GetVerificationStateMessageResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetVerificationStateMessageResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetVerificationStateMessageResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetVerificationStateMessageResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            GetVerificationStateMessageResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            return GetVerificationStateMessageResponseModel;
        }
    ]);

}(angular));
