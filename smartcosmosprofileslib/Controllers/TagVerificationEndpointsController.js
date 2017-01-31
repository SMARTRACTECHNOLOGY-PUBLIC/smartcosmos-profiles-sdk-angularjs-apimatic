/**
  * SMARTCOSMOSProfilesLib
  *
  * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('SMARTCOSMOSProfilesLib')
    .factory('TagVerificationEndpointsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'GetVerificationStateMessageResponseModel', 'VerifyTagsForRoundRockComplianceResponseModel', 'VerifyTagsForAVerificationTypeResponseModel',
        function($q, Configuration, HttpClient, APIHelper, GetVerificationStateMessageResponseModel, VerifyTagsForRoundRockComplianceResponseModel, VerifyTagsForAVerificationTypeResponseModel) {
            return {
                /**
                 * Get a message to a single verification state. Translate a numeric verification state into a human readable format. e.g. `0` into `verified`
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** tag found and result available
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
                 * - **401 UNAUTHORIZED** user not authorized
                 * ### Input HTTP Headers:
                 * - HTTP Basic Authorization (as specified above)
                 * - Accept language (as specified above)
                 * ### Input parameters:
                 * - verificationType (required, string, `RR`) ... Identifier of the verification type
                 * - verificationState (required, number, `0`) ... State of the verification
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - message (string, `verified`) ... Result message in `Accept-Language` (see `Multi language support`)
                 * @param {GetVerificationStateMessageRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<GetVerificationStateMessageResponseModel>}
                 */
                createGetVerificationStateMessage: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/verification/message";
                    
                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "content-type": "application/json; charset=utf-8"
                    };

                    // Remove null values
                    APIHelper.cleanObject(body);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        body: body
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = new GetVerificationStateMessageResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Verify tags for Round Rock compliance (verification type `RR`)
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** tag found and Round Rock compliance result available
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
                 * ### Input parameters:
                 * - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
                 * - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `result codes for a tag actions`)
                 * - state (Number, `0`) ... Indicates the current RoundRock compliance state (1 = Round Rock licensed; 0 = Not RoundRock licensed)
                 * The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.
                 * @param {VerifyTagsForRoundRockComplianceRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<VerifyTagsForRoundRockComplianceResponseModel>}
                 */
                createVerifyTagsForRoundRockCompliance: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/verification/tags/RR";
                    
                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "content-type": "application/json; charset=utf-8"
                    };

                    // Remove null values
                    APIHelper.cleanObject(body);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        body: body
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = new VerifyTagsForRoundRockComplianceResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Verify tags for a verification type, which is represented by an unique verification id like 'RR'
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** tag found and verification result available
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
                 * - **401 UNAUTHORIZED** user not authorized
                 * ### Input HTTP Headers:
                 * - HTTP Basic Authorization (as specified above)
                 * ### Input parameters:
                 * - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
                 * - verificationType (required, String, `RR`) ... Verification type
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
                 * - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)
                 * - state (Number, `0`) ... Indicates the current verification state; Number depends on verification type; Use the message function to get a string message
                 * The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.
                 * @param {VerifyTagsForAVerificationTypeRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<VerifyTagsForAVerificationTypeResponseModel>}
                 */
                createVerifyTagsForAVerificationType: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/verification/tags";
                    
                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "content-type": "application/json; charset=utf-8"
                    };

                    // Remove null values
                    APIHelper.cleanObject(body);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        username: Configuration.basicAuthUserName,
                        password: Configuration.basicAuthPassword,
                        body: body
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = new VerifyTagsForAVerificationTypeResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
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
