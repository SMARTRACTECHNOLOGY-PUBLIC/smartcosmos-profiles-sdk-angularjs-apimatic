/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of VerifyTagsForRoundRockComplianceRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('VerifyTagsForRoundRockComplianceRequestModel', ['BaseModel',
        function (BaseModel) {
            var VerifyTagsForRoundRockComplianceRequestModel = function (obj) {
                if (!obj) {
                    this.tagIds = null;
                } else {
                    this.tagIds = obj.tagIds;
                }
            }
    
            VerifyTagsForRoundRockComplianceRequestModel.prototype = new BaseModel();
            VerifyTagsForRoundRockComplianceRequestModel.prototype.constructor = VerifyTagsForRoundRockComplianceRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            VerifyTagsForRoundRockComplianceRequestModel.prototype.getTagIds = function () {
                return this.tagIds;
            };
        
            /**
             * Setter for TagIds
             * 
             * @param {array} value 
             */
            VerifyTagsForRoundRockComplianceRequestModel.prototype.setTagIds = function (value) {
                this.tagIds = value;
            };
        
            return VerifyTagsForRoundRockComplianceRequestModel;
        }
    ]);

}(angular));
