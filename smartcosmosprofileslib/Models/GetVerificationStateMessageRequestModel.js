/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetVerificationStateMessageRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetVerificationStateMessageRequestModel', ['BaseModel',
        function (BaseModel) {
            var GetVerificationStateMessageRequestModel = function (obj) {
                if (!obj) {
                    this.verificationState = null;
                    this.verificationType = null;
                } else {
                    this.verificationState = obj.verificationState;
                    this.verificationType = obj.verificationType;
                }
            }
    
            GetVerificationStateMessageRequestModel.prototype = new BaseModel();
            GetVerificationStateMessageRequestModel.prototype.constructor = GetVerificationStateMessageRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetVerificationStateMessageRequestModel.prototype.getVerificationState = function () {
                return this.verificationState;
            };
        
            /**
             * Setter for VerificationState
             * 
             * @param {int} value 
             */
            GetVerificationStateMessageRequestModel.prototype.setVerificationState = function (value) {
                this.verificationState = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetVerificationStateMessageRequestModel.prototype.getVerificationType = function () {
                return this.verificationType;
            };
        
            /**
             * Setter for VerificationType
             * 
             * @param {string} value 
             */
            GetVerificationStateMessageRequestModel.prototype.setVerificationType = function (value) {
                this.verificationType = value;
            };
        
            return GetVerificationStateMessageRequestModel;
        }
    ]);

}(angular));
