/**
 * SMARTCOSMOSProfilesLib
 *
 * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetTagDeliveryNetworkDataResponseModel
 *
 * @constructor
 */
angular.module('SMARTCOSMOSProfilesLib')
    .factory('GetTagDeliveryNetworkDataResponseModel', ['BaseModel',
        function (BaseModel) {
            var GetTagDeliveryNetworkDataResponseModel = function (obj) {
                if (!obj) {
                    this.code = null;
                    this.value = null;
                } else {
                    this.code = obj.code;
                    this.value = obj.value;
                }
            }
    
            GetTagDeliveryNetworkDataResponseModel.prototype = new BaseModel();
            GetTagDeliveryNetworkDataResponseModel.prototype.constructor = GetTagDeliveryNetworkDataResponseModel;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            GetTagDeliveryNetworkDataResponseModel.prototype.getCode = function () {
                return this.code;
            };
        
            /**
             * Setter for Code
             * 
             * @param {int} value 
             */
            GetTagDeliveryNetworkDataResponseModel.prototype.setCode = function (value) {
                this.code = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            GetTagDeliveryNetworkDataResponseModel.prototype.getValue = function () {
                return this.value;
            };
        
            /**
             * Setter for Value
             * 
             * @param {string} value 
             */
            GetTagDeliveryNetworkDataResponseModel.prototype.setValue = function (value) {
                this.value = value;
            };
        
            return GetTagDeliveryNetworkDataResponseModel;
        }
    ]);

}(angular));
