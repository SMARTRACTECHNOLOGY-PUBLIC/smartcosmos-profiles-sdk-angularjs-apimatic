/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetSingleTagCodeMessageRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetSingleTagCodeMessageRequestModel', ['BaseModel',
        function (BaseModel) {
            var GetSingleTagCodeMessageRequestModel = function (obj) {
                if (!obj) {
                    this.tagCode = null;
                } else {
                    this.tagCode = obj.tagCode;
                }
            }
    
            GetSingleTagCodeMessageRequestModel.prototype = new BaseModel();
            GetSingleTagCodeMessageRequestModel.prototype.constructor = GetSingleTagCodeMessageRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetSingleTagCodeMessageRequestModel.prototype.getTagCode = function () {
                return this.tagCode;
            };
        
            /**
             * Setter for TagCode
             * 
             * @param {int} value 
             */
            GetSingleTagCodeMessageRequestModel.prototype.setTagCode = function (value) {
                this.tagCode = value;
            };
        
            return GetSingleTagCodeMessageRequestModel;
        }
    ]);

}(angular));
