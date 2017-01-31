/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetKeysUsedForTagAuthenticationRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetKeysUsedForTagAuthenticationRequestModel', ['BaseModel',
        function (BaseModel) {
            var GetKeysUsedForTagAuthenticationRequestModel = function (obj) {
                if (!obj) {
                    this.appId = null;
                    this.tagIds = null;
                } else {
                    this.appId = obj.appId;
                    this.tagIds = obj.tagIds;
                }
            }
    
            GetKeysUsedForTagAuthenticationRequestModel.prototype = new BaseModel();
            GetKeysUsedForTagAuthenticationRequestModel.prototype.constructor = GetKeysUsedForTagAuthenticationRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetKeysUsedForTagAuthenticationRequestModel.prototype.getAppId = function () {
                return this.appId;
            };
        
            /**
             * Setter for AppId
             * 
             * @param {string} value 
             */
            GetKeysUsedForTagAuthenticationRequestModel.prototype.setAppId = function (value) {
                this.appId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            GetKeysUsedForTagAuthenticationRequestModel.prototype.getTagIds = function () {
                return this.tagIds;
            };
        
            /**
             * Setter for TagIds
             * 
             * @param {array} value 
             */
            GetKeysUsedForTagAuthenticationRequestModel.prototype.setTagIds = function (value) {
                this.tagIds = value;
            };
        
            return GetKeysUsedForTagAuthenticationRequestModel;
        }
    ]);

}(angular));
