/**
  * SMARTCOSMOSProfilesLib
  *
  * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('SMARTCOSMOSProfilesLib')
    .factory('TagDeliveryNetworkEndpointsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'GetTagDeliveryNetworkDataResponseModel',
        function($q, Configuration, HttpClient, APIHelper, GetTagDeliveryNetworkDataResponseModel) {
            return {
                /**
                 * **DRAFT** - Under development
                 * Get TDN data for a tag. The TDN data is proprietary and needs the SMART COSMOS TDN client
                 * service on the REST client for decoding. The endpoint will report "404 Not found" for all
                 * tags with no TDN data attached (so it is not possible to probe the Profiles instance for 
                 * no-TDN tag IDs without authorization).
                 * ### Notes
                 *  - Public endpoint (no authorization needed)
                 *  - If a secure endpoint is needed, it is possible to disable this endpoint and use GetTagValue with "TDN" as appId instead.
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate
                 * the actual result.
                 * - **200 OK** valid TDN tag ID
                 * - **404 NOT_FOUND** invalid tag ID (tag not available or no TDN data attached)
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - value (string, `54646E50726F707269657461727944617461`) ... TDN data (AsciiHex encoded)
                 * @param {string} tagId    Required parameter: Example: 
                 *
                 * @return {promise<GetTagDeliveryNetworkDataResponseModel>}
                 */
                getTagDeliveryNetworkData: function (tagId) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/tag/tdn/{tagId}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "tagId": tagId
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json"
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = new GetTagDeliveryNetworkDataResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                }
            }
        }
    ]);

}(angular));
