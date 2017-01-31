/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of QueryTagsResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('QueryTagsResponseModel', ['BaseModel',
        function (BaseModel) {
            var QueryTagsResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.tagIds = null;
                } else {
                    this.code = obj.code;
                    this.tagIds = obj.tagIds;
                }
            }
    
            QueryTagsResponseModel.prototype = new BaseModel();
            QueryTagsResponseModel.prototype.constructor = QueryTagsResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            QueryTagsResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            QueryTagsResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            QueryTagsResponseModel.prototype.getTagIds = function () {
                return this.tagIds;
            };
        
            /**
             * Setter for TagIds
             * 
             * @param {array} value 
             */
            QueryTagsResponseModel.prototype.setTagIds = function (value) {
                this.tagIds = value;
            };
        
            return QueryTagsResponseModel;
        }
    ]);

}(angular));
