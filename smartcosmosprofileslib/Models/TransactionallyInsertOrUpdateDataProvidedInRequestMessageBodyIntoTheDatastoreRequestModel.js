/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel', ['BaseModel',
        function (BaseModel) {
            var TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel = function (obj) {
                if (!obj) {
                    this.account = null;
                    this.metadata = null;
                    this.objectAddresses = null;
                    this.objects = null;
                    this.relationships = null;
                } else {
                    this.account = obj.account;
                    this.metadata = obj.metadata;
                    this.objectAddresses = obj.objectAddresses;
                    this.objects = obj.objects;
                    this.relationships = obj.relationships;
                }
            }
    
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype = new BaseModel();
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.constructor = TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {object}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getAccount = function () {
                return this.account;
            };
        
            /**
             * Setter for Account
             * 
             * @param {object} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setAccount = function (value) {
                this.account = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getMetadata = function () {
                return this.metadata;
            };
        
            /**
             * Setter for Metadata
             * 
             * @param {array} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setMetadata = function (value) {
                this.metadata = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getObjectAddresses = function () {
                return this.objectAddresses;
            };
        
            /**
             * Setter for ObjectAddresses
             * 
             * @param {array} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setObjectAddresses = function (value) {
                this.objectAddresses = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getObjects = function () {
                return this.objects;
            };
        
            /**
             * Setter for Objects
             * 
             * @param {array} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setObjects = function (value) {
                this.objects = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.getRelationships = function () {
                return this.relationships;
            };
        
            /**
             * Setter for Relationships
             * 
             * @param {array} value 
             */
            TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.prototype.setRelationships = function (value) {
                this.relationships = value;
            };
        
            return TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel;
        }
    ]);

}(angular));
