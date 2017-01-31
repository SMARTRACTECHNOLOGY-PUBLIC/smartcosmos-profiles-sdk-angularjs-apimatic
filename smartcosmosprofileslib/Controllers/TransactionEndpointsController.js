/**
  * SMARTCOSMOSProfilesLib
  *
  * This file was automatically generated for SMARTRAC Technology Fletcher, Inc. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('SMARTCOSMOSProfilesLib')
    .factory('TransactionEndpointsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel',
        function($q, Configuration, HttpClient, APIHelper, TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel) {
            return {
                /**
                 * ### Idempotent Behaviour
                 * This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
                 * ### Input parameters:
                 * - [[account, objects[], objectAddresses[], metadata[], relationships[], [...], ...]
                 * ### Output parameters:
                 * - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
                 * - message (string, `11e5d3f6-0c65-7791-917a-e95d5a282bcb`) ... System-generated Transaction ID, as used in all logging
                 * ### Input HTTP Headers:
                 * - HTTP Basic Authorization (as specified above)
                 * ### HTTP result codes
                 * This endpoint will respond with an appropriate HTTP status code to indicate the actual result
                 * - **200 SUCCESS** the insertion was successful. The UUID in the message string of the response body is system-generated transaction ID, which can be helpful for logging.
                 * - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information, including an approximate count of elements processed before the error occurred.
                 * - **401 UNAUTHORIZED** user not authorized
                 * @param {array} body    Required parameter: Example: 
                 * @param {string} transactionHandlerName    Required parameter: Example: 
                 *
                 * @return {promise<TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel>}
                 */
                createTransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastore: function (body, transactionHandlerName) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/rest/transaction/{transactionHandlerName}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "transactionHandlerName": transactionHandlerName
                    });

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
                        _result.body = new TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel(_strResult);
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
