/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of FileTransmissionRequestResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('FileTransmissionRequestResponseModel', ['BaseModel',
        function (BaseModel) {
            var FileTransmissionRequestResponseModel = function (obj) {
                if (!obj) {
                    this.endpointUri = null;
                    this.protocol = null;
                    this.transmissionUrn = null;
                } else {
                    this.endpointUri = obj.endpointUri;
                    this.protocol = obj.protocol;
                    this.transmissionUrn = obj.transmissionUrn;
                }
            }
    
            FileTransmissionRequestResponseModel.prototype = new BaseModel();
            FileTransmissionRequestResponseModel.prototype.constructor = FileTransmissionRequestResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            FileTransmissionRequestResponseModel.prototype.getEndpointUri = function () {
                return this.endpointUri;
            };
        
            /**
             * Setter for EndpointUri
             * 
             * @param {string} value 
             */
            FileTransmissionRequestResponseModel.prototype.setEndpointUri = function (value) {
                this.endpointUri = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            FileTransmissionRequestResponseModel.prototype.getProtocol = function () {
                return this.protocol;
            };
        
            /**
             * Setter for Protocol
             * 
             * @param {string} value 
             */
            FileTransmissionRequestResponseModel.prototype.setProtocol = function (value) {
                this.protocol = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            FileTransmissionRequestResponseModel.prototype.getTransmissionUrn = function () {
                return this.transmissionUrn;
            };
        
            /**
             * Setter for TransmissionUrn
             * 
             * @param {string} value 
             */
            FileTransmissionRequestResponseModel.prototype.setTransmissionUrn = function (value) {
                this.transmissionUrn = value;
            };
        
            return FileTransmissionRequestResponseModel;
        }
    ]);

}(angular));
