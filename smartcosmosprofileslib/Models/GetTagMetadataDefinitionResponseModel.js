/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetTagMetadataDefinitionResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetTagMetadataDefinitionResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetTagMetadataDefinitionResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.properties = null;
                    this.tagId = null;
                } else {
                    this.code = obj.code;
                    this.properties = obj.properties;
                    this.tagId = obj.tagId;
                }
            }
    
            GetTagMetadataDefinitionResponseModel.prototype = new BaseModel();
            GetTagMetadataDefinitionResponseModel.prototype.constructor = GetTagMetadataDefinitionResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetTagMetadataDefinitionResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetTagMetadataDefinitionResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetTagMetadataDefinitionResponseModel.prototype.getProperties = function () {
                return this.properties;
            };
        
            /**
             * Setter for Properties
             * 
             * @param {array} value 
             */
            GetTagMetadataDefinitionResponseModel.prototype.setProperties = function (value) {
                this.properties = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetTagMetadataDefinitionResponseModel.prototype.getTagId = function () {
                return this.tagId;
            };
        
            /**
             * Setter for TagId
             * 
             * @param {string} value 
             */
            GetTagMetadataDefinitionResponseModel.prototype.setTagId = function (value) {
                this.tagId = value;
            };
        
            return GetTagMetadataDefinitionResponseModel;
        }
    ]);

}(angular));
