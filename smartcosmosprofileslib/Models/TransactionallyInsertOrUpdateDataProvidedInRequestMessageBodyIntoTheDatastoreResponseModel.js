/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel', ['BaseModel',
        function (BaseModel) {
            var TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.message = null;
                } else {
                    this.code = obj.code;
                    this.message = obj.message;
                }
            }
    
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype = new BaseModel();
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype.constructor = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype.getMessage = function () {
                return this.message;
            };
        
            /**
             * Setter for Message
             * 
             * @param {string} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.prototype.setMessage = function (value) {
                this.message = value;
            };
        
            return TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel;
        }
    ]);

}(angular));
