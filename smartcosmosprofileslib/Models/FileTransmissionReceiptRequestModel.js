/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of FileTransmissionReceiptRequestModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('FileTransmissionReceiptRequestModel', ['BaseModel',
        function (BaseModel) {
            var FileTransmissionReceiptRequestModel = function (obj) {
                if (!obj) {
                    this.transmissionResult = null;
                    this.transmissionUrn = null;
                } else {
                    this.transmissionResult = obj.transmissionResult;
                    this.transmissionUrn = obj.transmissionUrn;
                }
            }
    
            FileTransmissionReceiptRequestModel.prototype = new BaseModel();
            FileTransmissionReceiptRequestModel.prototype.constructor = FileTransmissionReceiptRequestModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            FileTransmissionReceiptRequestModel.prototype.getTransmissionResult = function () {
                return this.transmissionResult;
            };
        
            /**
             * Setter for TransmissionResult
             * 
             * @param {string} value 
             */
            FileTransmissionReceiptRequestModel.prototype.setTransmissionResult = function (value) {
                this.transmissionResult = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            FileTransmissionReceiptRequestModel.prototype.getTransmissionUrn = function () {
                return this.transmissionUrn;
            };
        
            /**
             * Setter for TransmissionUrn
             * 
             * @param {string} value 
             */
            FileTransmissionReceiptRequestModel.prototype.setTransmissionUrn = function (value) {
                this.transmissionUrn = value;
            };
        
            return FileTransmissionReceiptRequestModel;
        }
    ]);

}(angular));
