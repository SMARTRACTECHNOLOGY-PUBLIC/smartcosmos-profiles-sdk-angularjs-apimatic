/**
  * SMARTCOSMOSProfilesLib
  *
  * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('SMARTCOSMOSProfilesLib')
    .factory('TagAuthenticationEndpointsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'GetOTPAuthenticationChallengeResponseModel', 'VerifyNXPTagSignatureResponseModel', 'ValidateOTPEncryptionResultResponseModel',
        function($q, Configuration, HttpClient, APIHelper, GetOTPAuthenticationChallengeResponseModel, VerifyNXPTagSignatureResponseModel, ValidateOTPEncryptionResultResponseModel) {
            return {
                /**
                 * OTP (One-Time Password) Authentication is performed in three steps:
                 *  1. Retrieve an authentication challenge for the given tag
                 *     in: tagId, appId
                 *     out: otpRequestId, otpVector
                 *  2. Calculate the OTP encryption result on the client
                 *  3. Send the OTP encryption result to the service
                 *     in: tagId, otpRequestId, otpResult
                 *     out: verification result
                 * Get an authentication challenge to authenticate a tag identified by its tag ID using an OTP init vector
                 * and a key. The authentication session is valid for 60 seconds.
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** tags found and result available (also returned if only a subset of tags have this keys)
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
                 * - **401 UNAUTHORIZED** user not authorized
                 * - **404 NOT_FOUND** no matching tags found or none the tags found does support OTP authentication
                 * ### Input parameters:
                 * - tagId (required, string, `0EEEE100000001`) ... Identifier for the tag
                 * - appId (optional, string, `OTP`) ... Identifier for the requested application (used for multi application RFID tags)
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - message (string, `Verification successful`) ... Result message
                 * - tagId (string, `0EEEE100000001`) ... tag ID
                 * - otpRequestId (string, `urn:uuid:82b3a00c-e1b0-44cb-a50d-7705e1c6e2b4`) ... Identifier to track the authentication flow
                 * - otpVector (byte[], `MzMEOwsSAkYTBRUTPjpGJRIsLgE=`) ... Generated OTP init vector to calculate the OTP result
                 * @param {GetOTPAuthenticationChallengeRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<GetOTPAuthenticationChallengeResponseModel>}
                 */
                createGetOTPAuthenticationChallenge: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/tag/auth/otp/request";
                    
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
                        _result.body = new GetOTPAuthenticationChallengeResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Verify the signature of NXP NTAG, Mifare Ultralight EV1 or I-Code SLIX2 tags. The signature could be obtained
                 * from the NXP tag by issuing a READ_SIG command. To use the correct verification key, it is also
                 * required to submit the tag version, which could be acquired by issuing a GET_VERSION command.
                 * The signature is verified in Profiles by ECDSA using the public key from NXP.
                 * Following NXP chip types are supported:
                 * - NXP NTAG
                 * - NXP Mifare Ultralight EV1
                 * - NXP I-Code SLIX2
                 * ### Note on tagVersion
                 * - For NTAG and Ultralight it is required to provide the GET_VERSION response to locate the correct verification key
                 * - For I-Code the *tagVersion* could be ommitted, because the verification key is derived from the UID directly
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** signature valid
                 * - **400 BAD_REQUEST** signature invalid
                 * - **401 UNAUTHORIZED** user not authorized
                 * ### Input parameters:
                 * - tagId (required, string, `04001122334455`) ... NXP tag UID
                 * - tagVersion (optional, string, `0004040201000F03`) ... NXP GET_VERSION response
                 * - signature (required, string, `MTIzNDU2NzgxMjM0NTY3ODEyMzQ1Njc4MTIzNDU2Nzg=`) ... signature read from the chip (Base64 encoded)
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - message (string, `Verification successful`) ... Result message
                 * - tagId (string, `04001122334455`) ... NXP tag UID
                 * @param {VerifyNXPTagSignatureRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<VerifyNXPTagSignatureResponseModel>}
                 */
                createVerifyNXPTagSignature: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/tag/auth/nxp";
                    
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
                        _result.body = new VerifyNXPTagSignatureResponseModel(_strResult);
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
                 * Validate the OTP authentication attempt based on the OTP init vactor identified by UUID.
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 OK** authentication successful
                 * - **400 BAD_REQUEST** authentication failed
                 * - **401 UNAUTHORIZED** user not authorized
                 * - **404 NOT_FOUND** invalid session or session expired
                 * ### Input parameters:
                 * - timestamp (required, long, `1430911319542`) ... UTC timestamp used by the client to calculate the OTP
                 * - otpRequestId (required, string, `urn:uuid:82b3a00c-e1b0-44cb-a50d-7705e1c6e2b4`) ... Server side generated id to track the authentication flow
                 * - otpResult (required, int, `123456`) ... Generated OTP from HMAC according to RFC 6238
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - message (string, `Verification successful`) ... Result message
                 * - tagId (string, `0EEEE100000001`) ... tag ID
                 * @param {ValidateOTPEncryptionResultRequestModel} body    Required parameter: Example: 
                 *
                 * @return {promise<ValidateOTPEncryptionResultResponseModel>}
                 */
                createValidateOTPEncryptionResult: function (body) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/tag/auth/otp/validate";
                    
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
                        _result.body = new ValidateOTPEncryptionResultResponseModel(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 400) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 400, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Unexpected error in API call. See HTTP response body for details.", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
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
