/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of QueryBatchesResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('QueryBatchesResponseModel', ['BaseModel',
        function (BaseModel) {
            var QueryBatchesResponseModel = function (obj) {
                if (!obj) {
                    this.batchUrns = null;
                    this.code = null;
                } else {
                    this.batchUrns = obj.batchUrns;
                    this.code = obj.code;
                }
            }
    
            QueryBatchesResponseModel.prototype = new BaseModel();
            QueryBatchesResponseModel.prototype.constructor = QueryBatchesResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            QueryBatchesResponseModel.prototype.getBatchUrns = function () {
                return this.batchUrns;
            };
        
            /**
             * Setter for BatchUrns
             * 
             * @param {array} value 
             */
            QueryBatchesResponseModel.prototype.setBatchUrns = function (value) {
                this.batchUrns = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            QueryBatchesResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            QueryBatchesResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            return QueryBatchesResponseModel;
        }
    ]);

}(angular));
