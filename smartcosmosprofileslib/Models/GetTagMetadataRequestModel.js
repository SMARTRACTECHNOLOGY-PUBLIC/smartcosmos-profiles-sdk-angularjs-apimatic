/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetTagMetadataRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetTagMetadataRequestModel', ['BaseModel',
        function (BaseModel) {
            var GetTagMetadataRequestModel = function (obj) {
                if (!obj) {
                    this.properties = null;
                    this.tagIds = null;
                    this.verificationTypes = null;
                } else {
                    this.properties = obj.properties;
                    this.tagIds = obj.tagIds;
                    this.verificationTypes = obj.verificationTypes;
                }
            }
    
            GetTagMetadataRequestModel.prototype = new BaseModel();
            GetTagMetadataRequestModel.prototype.constructor = GetTagMetadataRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetTagMetadataRequestModel.prototype.getProperties = function () {
                return this.properties;
            };
        
            /**
             * Setter for Properties
             * 
             * @param {array} value 
             */
            GetTagMetadataRequestModel.prototype.setProperties = function (value) {
                this.properties = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetTagMetadataRequestModel.prototype.getTagIds = function () {
                return this.tagIds;
            };
        
            /**
             * Setter for TagIds
             * 
             * @param {array} value 
             */
            GetTagMetadataRequestModel.prototype.setTagIds = function (value) {
                this.tagIds = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetTagMetadataRequestModel.prototype.getVerificationTypes = function () {
                return this.verificationTypes;
            };
        
            /**
             * Setter for VerificationTypes
             * 
             * @param {array} value 
             */
            GetTagMetadataRequestModel.prototype.setVerificationTypes = function (value) {
                this.verificationTypes = value;
            };
        
            return GetTagMetadataRequestModel;
        }
    ]);

}(angular));
