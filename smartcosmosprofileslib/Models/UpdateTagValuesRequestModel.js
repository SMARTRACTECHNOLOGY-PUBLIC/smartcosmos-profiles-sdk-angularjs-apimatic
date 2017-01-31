/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UpdateTagValuesRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('UpdateTagValuesRequestModel', ['BaseModel',
        function (BaseModel) {
            var UpdateTagValuesRequestModel = function (obj) {
                if (!obj) {
                    this.appId = null;
                    this.tags = null;
                } else {
                    this.appId = obj.appId;
                    this.tags = obj.tags;
                }
            }
    
            UpdateTagValuesRequestModel.prototype = new BaseModel();
            UpdateTagValuesRequestModel.prototype.constructor = UpdateTagValuesRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            UpdateTagValuesRequestModel.prototype.getAppId = function () {
                return this.appId;
            };
        
            /**
             * Setter for AppId
             * 
             * @param {string} value 
             */
            UpdateTagValuesRequestModel.prototype.setAppId = function (value) {
                this.appId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            UpdateTagValuesRequestModel.prototype.getTags = function () {
                return this.tags;
            };
        
            /**
             * Setter for Tags
             * 
             * @param {array} value 
             */
            UpdateTagValuesRequestModel.prototype.setTags = function (value) {
                this.tags = value;
            };
        
            return UpdateTagValuesRequestModel;
        }
    ]);

}(angular));
