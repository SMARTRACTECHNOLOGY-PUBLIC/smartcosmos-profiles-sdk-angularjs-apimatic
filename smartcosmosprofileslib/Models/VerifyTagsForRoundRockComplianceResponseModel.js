/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of VerifyTagsForRoundRockComplianceResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('VerifyTagsForRoundRockComplianceResponseModel', ['BaseModel',
        function (BaseModel) {
            var VerifyTagsForRoundRockComplianceResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.result = null;
                } else {
                    this.code = obj.code;
                    this.result = obj.result;
                }
            }
    
            VerifyTagsForRoundRockComplianceResponseModel.prototype = new BaseModel();
            VerifyTagsForRoundRockComplianceResponseModel.prototype.constructor = VerifyTagsForRoundRockComplianceResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            VerifyTagsForRoundRockComplianceResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            VerifyTagsForRoundRockComplianceResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            VerifyTagsForRoundRockComplianceResponseModel.prototype.getResult = function () {
                return this.result;
            };
        
            /**
             * Setter for Result
             * 
             * @param {array} value 
             */
            VerifyTagsForRoundRockComplianceResponseModel.prototype.setResult = function (value) {
                this.result = value;
            };
        
            return VerifyTagsForRoundRockComplianceResponseModel;
        }
    ]);

}(angular));
