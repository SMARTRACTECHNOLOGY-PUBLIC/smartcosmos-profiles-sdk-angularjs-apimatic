/**
  * SMARTCOSMOSProfilesLib
  *
  * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('SMARTCOSMOSProfilesLib')
    .factory('PlatformAvailabilityEndpointsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper',
        function($q, Configuration, HttpClient, APIHelper) {
            return {
                /**
                 * Resource for checking the platform availability. 
                 * ### HTTP result codes
                 * This endpoint will respond with an appropriate HTTP status code to indicate the actual result
                 * - **204 NO_CONTENT** platform is available
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
                 * - **503 SERVICE_UNAVAILABLE** service is temporary unavailable (e.g. scheduled Platform Maintenance). Try again later.
                 *
                 * @return {promise<mixed>}
                 */
                getCheckPlatformAvailability: function () {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/test/ping";
                    
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
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 503) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 503, errorResponse: _result.message}, _result.getContext()));
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
