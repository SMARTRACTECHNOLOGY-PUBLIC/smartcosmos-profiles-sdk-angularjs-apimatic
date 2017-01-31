# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/)

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `smartcosmosprofileslib` folder inside the scripts folder.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=SMART%20COSMOS%20Profiles-Angular&projectName=SMARTCOSMOSProfilesLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=SMART%20COSMOS%20Profiles-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
    var app = angular.module('myApp', []);
    app.controller('testController', function($scope) 
    {

    });
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Angular Project</title>
		<script></script>
	</head>

	<body>
	</body>

	</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=SMART%20COSMOS%20Profiles-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
	<script src="scripts/angular.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
	<head>
		...
		<!-- Helper files -->
		<script src="scripts/smartcosmosprofileslib/Configuration.js"></script>
		<script src="scripts/smartcosmosprofileslib/APIHelper.js"></script>
		<script src="scripts/smartcosmosprofileslib/Http/Client/HttpContext.js"></script>
		<script src="scripts/smartcosmosprofileslib/Http/Client/RequestClient.js"></script>
		<script src="scripts/smartcosmosprofileslib/Http/Request/HttpRequest.js"></script>
		<script src="scripts/smartcosmosprofileslib/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/smartcosmosprofileslib/Controllers/DataImportEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/TagDataEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/TagDeliveryNetworkEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/TransactionEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/TagAuthenticationEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/TagVerificationEndpointsController.js"></script>
        <script src="scripts/smartcosmosprofileslib/Controllers/PlatformAvailabilityEndpointsController.js"></script>


		<!-- Models -->
        <script src="scripts/smartcosmosprofileslib/Models/BaseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetTagMetadataResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetSingleTagCodeMessageRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetSingleTagCodeMessageResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetKeysUsedForTagAuthenticationRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetKeysUsedForTagAuthenticationResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetApplicationDataFromTagsRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetApplicationDataFromTagsResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/UpdateTagValuesRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/UpdateTagValuesResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetOTPAuthenticationChallengeRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetTagDeliveryNetworkDataResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetVerificationStateMessageResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/QueryBatchesResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/QueryTagsResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyNXPTagSignatureRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyNXPTagSignatureResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/FileTransmissionRequestRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/FileTransmissionRequestResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/FileTransmissionReceiptRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyTagsForAVerificationTypeRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyTagsForAVerificationTypeResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyTagsForRoundRockComplianceRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/VerifyTagsForRoundRockComplianceResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetVerificationStateMessageRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetTagMetadataRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetTagMetadataDefinitionResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/GetOTPAuthenticationChallengeResponseModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/ValidateOTPEncryptionResultRequestModel.js"></script>
        <script src="scripts/smartcosmosprofileslib/Models/ValidateOTPEncryptionResultResponseModel.js"></script>

		...
	</head>
```
> The Configuration.js file should be imported before the other files.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
	<head>
		...
		<script src="scripts/app.js"></script>
	</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
	<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
	...
	<body ng-app="myApp">
		<div ng-controller="testController">
			...
		</div>
		...
	</body>
	...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
    var app = angular.module('myApp', ['SMARTCOSMOSProfilesLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [DataImportEndpointsController](#data_import_endpoints_controller)
* [TagDataEndpointsController](#tag_data_endpoints_controller)
* [TagDeliveryNetworkEndpointsController](#tag_delivery_network_endpoints_controller)
* [TransactionEndpointsController](#transaction_endpoints_controller)
* [TagAuthenticationEndpointsController](#tag_authentication_endpoints_controller)
* [TagVerificationEndpointsController](#tag_verification_endpoints_controller)
* [PlatformAvailabilityEndpointsController](#platform_availability_endpoints_controller)

### <a name="data_import_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DataImportEndpointsController") DataImportEndpointsController

#### Get singleton instance

The singleton instance of the ``` DataImportEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, DataImportEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="create_file_transmission_receipt"></a>![Method: ](https://apidocs.io/img/method.png ".DataImportEndpointsController.createFileTransmissionReceipt") createFileTransmissionReceipt

> TODO: Add a method description


```javascript
function createFileTransmissionReceipt(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DataImportEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new FileTransmissionReceiptRequestModel({"key":"value"});


		var result = DataImportEndpointsController.createFileTransmissionReceipt(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="update_file_transmission_request"></a>![Method: ](https://apidocs.io/img/method.png ".DataImportEndpointsController.updateFileTransmissionRequest") updateFileTransmissionRequest

> TODO: Add a method description


```javascript
function updateFileTransmissionRequest(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DataImportEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new FileTransmissionRequestRequestModel({"key":"value"});


		var result = DataImportEndpointsController.updateFileTransmissionRequest(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)

### <a name="tag_data_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TagDataEndpointsController") TagDataEndpointsController

#### Get singleton instance

The singleton instance of the ``` TagDataEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="get_tag_metadata_definition"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.getTagMetadataDefinition") getTagMetadataDefinition

> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** specified tag was found, result available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> ### Input parameters
> - tagId (required, string, `E12345678912345678`) ... a single RFID tag identifier
> - nameLike (optional, string, `chip`) ... Comparison string for metadata properties
> ### Output parameters
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId the requested `tagID`
> - properties an array of JSON objects, each of which contains property ID, property name, property data type, and a flag indicating whether the property exists for the tag.


```javascript
function getTagMetadataDefinition(tagId, nameLike)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tagId |  ``` Required ```  | TODO: Add a parameter description |
| nameLike |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var tagId = "tagId";
    var nameLike = "nameLike";


		var result = TagDataEndpointsController.getTagMetadataDefinition(tagId, nameLike);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="get_query_tags"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.getQueryTags") getQueryTags

> Look up an array of the first **count** tag IDs with the specified batch URN.
> ### Output parameters
> - tagIds (array of string, `E12345678912345678`) ... Array of RFID tag identifiers


```javascript
function getQueryTags(batchUrn, count)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| batchUrn |  ``` Required ```  | Case-sensitive batch URN |
| count |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of tag IDs to return; defaults to 100000; maximum is 1000000 |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var batchUrn = "batchUrn";
    var count = 183;


		var result = TagDataEndpointsController.getQueryTags(batchUrn, count);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="create_get_single_tag_code_message"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.createGetSingleTagCodeMessage") createGetSingleTagCodeMessage

> Get a message to a single numeric tag code.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** message available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> - Accept language (as specified above)
> ### Input parameters:
> - tagCode (required, number, `0`) ... Result code of a tag action
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `verified`) ... Result message in `Accept-Language` (see `Multi language support`)


```javascript
function createGetSingleTagCodeMessage(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetSingleTagCodeMessageRequestModel({"key":"value"});


		var result = TagDataEndpointsController.createGetSingleTagCodeMessage(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="update_tag_values"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.updateTagValues") updateTagValues

> Writes application data to tags, which updated the existing application data in Profiles. This
> function also supports setting the lock state of the application data, which prevents further
> changes of the application data.
> Writing application data to a tag is permitted under following conditions only:
> - The tag with the given tagId must exist in Profiles
> - The tag must have an application record with the given appId
> - The lock state of the tag's application data must be present and explicitly set to **false**
> - To insert a new application record, the data transaction endpoint shall be used
> **Notes:**
> - Omitting **value** in the request will update the lock state of the tag only.
> - Omitting **locked** in the request will write the value only.
> - It is not possible to unlock a locked tag by setting **locked** to **false**.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tags found and result available (also returned if only a subset of tags have this keys)
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> - **404 NOT_FOUND** no matching tags found or none the tags found do have app IDs with given name
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> - Accept language (as specified above)
> ### Input parameters:
> - appId (required, string, `ndef`) ... Application ID which references the data
> - tagId (required, string, `0EEEE100000001`) ... Identifier for each tag to be updated
> - value (optional, string, `AQIDBAUGBwgJCgsM`) ... Application data to be updated
> - locked (optional, boolean, `true`) ... Lock flag to be set
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId (string, `0EEEE100000001`) ... Tag ID
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)


```javascript
function updateTagValues(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new UpdateTagValuesRequestModel({"key":"value"});


		var result = TagDataEndpointsController.updateTagValues(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |
| 404 | Unexpected error in API call. See HTTP response body for details. |




#### <a name="create_get_application_data_from_tags"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.createGetApplicationDataFromTags") createGetApplicationDataFromTags

> Get application data from tags, which returns data encoded on the tags. This function also returns
> the lock state of the application data.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tags found and result available (also returned if only a subset of tags have this keys)
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> - **404 NOT_FOUND** no matching tags found or none the tags found does have keys with given name
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> - Accept language (as specified above)
> ### Input parameters:
> - tagIds (required, string, `0EEEE100000001`) ... Identifier for each tag to be queried
> - appId (required, string, `ndef`) ... Application ID which references the data
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId (string, `0EEEE100000001`) ... Tag ID
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)
> - value (string, `AQIDBAUGBwgJCgsM`) ... Application data (Base64 encoded)
> - locked (boolean, `false`) ... Tag has been made read-only


```javascript
function createGetApplicationDataFromTags(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetApplicationDataFromTagsRequestModel({"key":"value"});


		var result = TagDataEndpointsController.createGetApplicationDataFromTags(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |
| 404 | Unexpected error in API call. See HTTP response body for details. |




#### <a name="get_query_batches"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.getQueryBatches") getQueryBatches

> Look up an array of the first **count** batchUrns with the specified customer PO.
> **NOTE: Only one customerPO can be specified.**
> ### Output parameters
> - batchUrns (array of string, `urn:uuid:smartrac-group:batch:99990001`) ... Array of batch URNs


```javascript
function getQueryBatches(customerPO, count)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerPO |  ``` Required ```  | Case-sensitive customerPO |
| count |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of batch URNs to return; defaults to 100000; maximum is 1000000 |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var customerPO = "customerPO";
    var count = 183;


		var result = TagDataEndpointsController.getQueryBatches(customerPO, count);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="create_get_tag_metadata"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.createGetTagMetadata") createGetTagMetadata

> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** minimum 1 tag found and result available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> ### Input parameters
> - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
> - verificationTypes (optional, array of string, `RR`) ... Array of verification types
> - properties (optional, array of string, `plantId,batchId`) ... Array of requested properties
> <!--
> - materialPerformance (optional, array of string, `air,carton`) ... Array of requested material performance data
> -->
> ### Available tag properties
> Property ID | Data Type | Description | Availability
> ------------ | ------------- | ------------ | ------------
> custId | String | Customer ID | available
> orderId | String | Order ID | available
> orderDate | Long | Order date | available
> orderQty | Number | Order quantity | available
> orderQtyU | String | Order quantity unit | available
> customerPO | String | Customer purchase order number | available
> customerName | String | Customer name | available
> supplPO | String | Supplier purchase order number | available
> delivId | String | Delivery ID | available
> delivDate | Long | Delivery date | available
> delivQty | Number | Delivery quantity | available
> delivQtyU | String | Delivery quantity unit | available
> batchId | String | Roll number / batch ID | available
> yield | Number | Batch yield [%] | available
> subRoll | String | Sub roll number / sub batch ID | available
> plantId | String | Manufacturer production side ID | available
> chipManuf | String | Chip manufacturer | available
> chipModel | String | Chip model | available
> inlayType | String | Inlay type | available
> inlayManufDate | Long | Inlay manufacturer date | available
> attenuation | Number | Attenuation in dB | available
> checkState | Number | 0=failed; 1=passed (default) | available
> Notes:
>  - Only available properties can be requested (check `Availability` column above)
>  - Same data is not available for all tags/batches
>  - There are additional properties planned in the future
> ### Output parameters
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId according the requested `tagIds`
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `result codes for a tag actions`)
> - verificationState according the requested `verificationTypes`
> - properties according the requested `properties`


```javascript
function createGetTagMetadata(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetTagMetadataRequestModel({"key":"value"});


		var result = TagDataEndpointsController.createGetTagMetadata(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="create_get_keys_used_for_tag_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".TagDataEndpointsController.createGetKeysUsedForTagAuthentication") createGetKeysUsedForTagAuthentication

> Get authentication keys for encoded tags, which can be used to access the tag memory. The key names,
> content and access rules need to be defined when ordering the tags.
> It is possible to have several applications with their corresponding keys on a tag.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tags found and result available (also returned if only a subset of tags have this keys)
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> - **404 NOT_FOUND** no matching tags found or none the tags found does have keys with given name
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> - Accept language (as specified above)
> ### Input parameters:
> - tagIds (required, string, `0EEEE100000001`) ... Identifier for each tag to be queried
> - appId (required, string, `SC Public Transport`) ... Application ID which references the key
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId (string, `0EEEE100000001`) ... Tag ID
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)
> - key (string, `0102030405060708090A0B0C`) ... Key blob (AsciiHex encoded key)


```javascript
function createGetKeysUsedForTagAuthentication(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDataEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetKeysUsedForTagAuthenticationRequestModel({"key":"value"});


		var result = TagDataEndpointsController.createGetKeysUsedForTagAuthentication(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |
| 404 | Unexpected error in API call. See HTTP response body for details. |




[Back to List of Controllers](#list_of_controllers)

### <a name="tag_delivery_network_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TagDeliveryNetworkEndpointsController") TagDeliveryNetworkEndpointsController

#### Get singleton instance

The singleton instance of the ``` TagDeliveryNetworkEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TagDeliveryNetworkEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="get_tag_delivery_network_data"></a>![Method: ](https://apidocs.io/img/method.png ".TagDeliveryNetworkEndpointsController.getTagDeliveryNetworkData") getTagDeliveryNetworkData

> **DRAFT** - Under development
> Get TDN data for a tag. The TDN data is proprietary and needs the SMART COSMOS TDN client
> service on the REST client for decoding. The endpoint will report "404 Not found" for all
> tags with no TDN data attached (so it is not possible to probe the Profiles instance for 
> no-TDN tag IDs without authorization).
> ### Notes
>  - Public endpoint (no authorization needed)
>  - If a secure endpoint is needed, it is possible to disable this endpoint and use GetTagValue with "TDN" as appId instead.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate
> the actual result.
> - **200 OK** valid TDN tag ID
> - **404 NOT_FOUND** invalid tag ID (tag not available or no TDN data attached)
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - value (string, `54646E50726F707269657461727944617461`) ... TDN data (AsciiHex encoded)


```javascript
function getTagDeliveryNetworkData(tagId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tagId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagDeliveryNetworkEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var tagId = "tagId";


		var result = TagDeliveryNetworkEndpointsController.getTagDeliveryNetworkData(tagId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)

### <a name="transaction_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TransactionEndpointsController") TransactionEndpointsController

#### Get singleton instance

The singleton instance of the ``` TransactionEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TransactionEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="create_transactionally_insert_or_update_data_provided_in_request_message_body_into_the_datastore"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionEndpointsController.createTransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastore") createTransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastore

> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> ### Input parameters:
> - [[account, objects[], objectAddresses[], metadata[], relationships[], [...], ...]
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `11e5d3f6-0c65-7791-917a-e95d5a282bcb`) ... System-generated Transaction ID, as used in all logging
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> ### HTTP result codes
> This endpoint will respond with an appropriate HTTP status code to indicate the actual result
> - **200 SUCCESS** the insertion was successful. The UUID in the message string of the response body is system-generated transaction ID, which can be helpful for logging.
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information, including an approximate count of elements processed before the error occurred.
> - **401 UNAUTHORIZED** user not authorized


```javascript
function createTransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastore(body, transactionHandlerName)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |
| transactionHandlerName |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TransactionEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = [{"key":"value"}].map(function(elem) {
        return new Transactionally insert or update data provided in request message body into the datastore request(elem);
    });
    var transactionHandlerName = "transactionHandlerName";


		var result = TransactionEndpointsController.createTransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastore(body, transactionHandlerName);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)

### <a name="tag_authentication_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TagAuthenticationEndpointsController") TagAuthenticationEndpointsController

#### Get singleton instance

The singleton instance of the ``` TagAuthenticationEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TagAuthenticationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="create_get_otp_authentication_challenge"></a>![Method: ](https://apidocs.io/img/method.png ".TagAuthenticationEndpointsController.createGetOTPAuthenticationChallenge") createGetOTPAuthenticationChallenge

> OTP (One-Time Password) Authentication is performed in three steps:
>  1. Retrieve an authentication challenge for the given tag
>     in: tagId, appId
>     out: otpRequestId, otpVector
>  2. Calculate the OTP encryption result on the client
>  3. Send the OTP encryption result to the service
>     in: tagId, otpRequestId, otpResult
>     out: verification result
> Get an authentication challenge to authenticate a tag identified by its tag ID using an OTP init vector
> and a key. The authentication session is valid for 60 seconds.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tags found and result available (also returned if only a subset of tags have this keys)
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> - **404 NOT_FOUND** no matching tags found or none the tags found does support OTP authentication
> ### Input parameters:
> - tagId (required, string, `0EEEE100000001`) ... Identifier for the tag
> - appId (optional, string, `OTP`) ... Identifier for the requested application (used for multi application RFID tags)
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `Verification successful`) ... Result message
> - tagId (string, `0EEEE100000001`) ... tag ID
> - otpRequestId (string, `urn:uuid:82b3a00c-e1b0-44cb-a50d-7705e1c6e2b4`) ... Identifier to track the authentication flow
> - otpVector (byte[], `MzMEOwsSAkYTBRUTPjpGJRIsLgE=`) ... Generated OTP init vector to calculate the OTP result


```javascript
function createGetOTPAuthenticationChallenge(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagAuthenticationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetOTPAuthenticationChallengeRequestModel({"key":"value"});


		var result = TagAuthenticationEndpointsController.createGetOTPAuthenticationChallenge(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |
| 404 | Unexpected error in API call. See HTTP response body for details. |




#### <a name="create_verify_nxp_tag_signature"></a>![Method: ](https://apidocs.io/img/method.png ".TagAuthenticationEndpointsController.createVerifyNXPTagSignature") createVerifyNXPTagSignature

> Verify the signature of NXP NTAG, Mifare Ultralight EV1 or I-Code SLIX2 tags. The signature could be obtained
> from the NXP tag by issuing a READ_SIG command. To use the correct verification key, it is also
> required to submit the tag version, which could be acquired by issuing a GET_VERSION command.
> The signature is verified in Profiles by ECDSA using the public key from NXP.
> Following NXP chip types are supported:
> - NXP NTAG
> - NXP Mifare Ultralight EV1
> - NXP I-Code SLIX2
> ### Note on tagVersion
> - For NTAG and Ultralight it is required to provide the GET_VERSION response to locate the correct verification key
> - For I-Code the *tagVersion* could be ommitted, because the verification key is derived from the UID directly
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** signature valid
> - **400 BAD_REQUEST** signature invalid
> - **401 UNAUTHORIZED** user not authorized
> ### Input parameters:
> - tagId (required, string, `04001122334455`) ... NXP tag UID
> - tagVersion (optional, string, `0004040201000F03`) ... NXP GET_VERSION response
> - signature (required, string, `MTIzNDU2NzgxMjM0NTY3ODEyMzQ1Njc4MTIzNDU2Nzg=`) ... signature read from the chip (Base64 encoded)
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `Verification successful`) ... Result message
> - tagId (string, `04001122334455`) ... NXP tag UID


```javascript
function createVerifyNXPTagSignature(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagAuthenticationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new VerifyNXPTagSignatureRequestModel({"key":"value"});


		var result = TagAuthenticationEndpointsController.createVerifyNXPTagSignature(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="create_validate_otp_encryption_result"></a>![Method: ](https://apidocs.io/img/method.png ".TagAuthenticationEndpointsController.createValidateOTPEncryptionResult") createValidateOTPEncryptionResult

> Validate the OTP authentication attempt based on the OTP init vactor identified by UUID.
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** authentication successful
> - **400 BAD_REQUEST** authentication failed
> - **401 UNAUTHORIZED** user not authorized
> - **404 NOT_FOUND** invalid session or session expired
> ### Input parameters:
> - timestamp (required, long, `1430911319542`) ... UTC timestamp used by the client to calculate the OTP
> - otpRequestId (required, string, `urn:uuid:82b3a00c-e1b0-44cb-a50d-7705e1c6e2b4`) ... Server side generated id to track the authentication flow
> - otpResult (required, int, `123456`) ... Generated OTP from HMAC according to RFC 6238
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `Verification successful`) ... Result message
> - tagId (string, `0EEEE100000001`) ... tag ID


```javascript
function createValidateOTPEncryptionResult(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagAuthenticationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new ValidateOTPEncryptionResultRequestModel({"key":"value"});


		var result = TagAuthenticationEndpointsController.createValidateOTPEncryptionResult(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |
| 404 | Unexpected error in API call. See HTTP response body for details. |




[Back to List of Controllers](#list_of_controllers)

### <a name="tag_verification_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TagVerificationEndpointsController") TagVerificationEndpointsController

#### Get singleton instance

The singleton instance of the ``` TagVerificationEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TagVerificationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="create_get_verification_state_message"></a>![Method: ](https://apidocs.io/img/method.png ".TagVerificationEndpointsController.createGetVerificationStateMessage") createGetVerificationStateMessage

> Get a message to a single verification state. Translate a numeric verification state into a human readable format. e.g. `0` into `verified`
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tag found and result available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> - Accept language (as specified above)
> ### Input parameters:
> - verificationType (required, string, `RR`) ... Identifier of the verification type
> - verificationState (required, number, `0`) ... State of the verification
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - message (string, `verified`) ... Result message in `Accept-Language` (see `Multi language support`)


```javascript
function createGetVerificationStateMessage(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagVerificationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new GetVerificationStateMessageRequestModel({"key":"value"});


		var result = TagVerificationEndpointsController.createGetVerificationStateMessage(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




#### <a name="create_verify_tags_for_round_rock_compliance"></a>![Method: ](https://apidocs.io/img/method.png ".TagVerificationEndpointsController.createVerifyTagsForRoundRockCompliance") createVerifyTagsForRoundRockCompliance

> Verify tags for Round Rock compliance (verification type `RR`)
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tag found and Round Rock compliance result available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> ### Input parameters:
> - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `result codes for a tag actions`)
> - state (Number, `0`) ... Indicates the current RoundRock compliance state (1 = Round Rock licensed; 0 = Not RoundRock licensed)
> The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.


```javascript
function createVerifyTagsForRoundRockCompliance(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagVerificationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new VerifyTagsForRoundRockComplianceRequestModel({"key":"value"});


		var result = TagVerificationEndpointsController.createVerifyTagsForRoundRockCompliance(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |




#### <a name="create_verify_tags_for_a_verification_type"></a>![Method: ](https://apidocs.io/img/method.png ".TagVerificationEndpointsController.createVerifyTagsForAVerificationType") createVerifyTagsForAVerificationType

> Verify tags for a verification type, which is represented by an unique verification id like 'RR'
> ### Idempotent Behaviour
> This endpoint is idempotent and will respond with an appropriate HTTP status code to indicate the actual result
> - **200 OK** tag found and verification result available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **401 UNAUTHORIZED** user not authorized
> ### Input HTTP Headers:
> - HTTP Basic Authorization (as specified above)
> ### Input parameters:
> - tagIds (required, array of string, `E12345678912345678`) ... Array of RFID tag identifiers; max 1000 entries allowed
> - verificationType (required, String, `RR`) ... Verification type
> ### Output parameters:
> - code (Number, `0`) ... Indicates the result code of this call (see `result codes`)
> - tagId (string, `0EEEE100000001`) ... RFID tag identifiers
> - tagCode (Number, `0`) ... Indicates if the result code for this tag (see `Possible result codes for a tag actions`)
> - state (Number, `0`) ... Indicates the current verification state; Number depends on verification type; Use the message function to get a string message
> The output contains all desired tag records. Even if the tag is not available or the user does not have permissions. The `tagCode` indicates the result code for each tag.


```javascript
function createVerifyTagsForAVerificationType(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TagVerificationEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	    var body = new VerifyTagsForAVerificationTypeRequestModel({"key":"value"});


		var result = TagVerificationEndpointsController.createVerifyTagsForAVerificationType(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 401 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)

### <a name="platform_availability_endpoints_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PlatformAvailabilityEndpointsController") PlatformAvailabilityEndpointsController

#### Get singleton instance

The singleton instance of the ``` PlatformAvailabilityEndpointsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PlatformAvailabilityEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	});
```

#### <a name="get_check_platform_availability"></a>![Method: ](https://apidocs.io/img/method.png ".PlatformAvailabilityEndpointsController.getCheckPlatformAvailability") getCheckPlatformAvailability

> Resource for checking the platform availability. 
> ### HTTP result codes
> This endpoint will respond with an appropriate HTTP status code to indicate the actual result
> - **204 NO_CONTENT** platform is available
> - **400 BAD_REQUEST** problem occurred, check message parameter for detailed information
> - **503 SERVICE_UNAVAILABLE** service is temporary unavailable (e.g. scheduled Platform Maintenance). Try again later.


```javascript
function getCheckPlatformAvailability()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, PlatformAvailabilityEndpointsController,GetTagMetadataResponseModel,GetSingleTagCodeMessageRequestModel,GetSingleTagCodeMessageResponseModel,GetKeysUsedForTagAuthenticationRequestModel,GetKeysUsedForTagAuthenticationResponseModel,GetApplicationDataFromTagsRequestModel,GetApplicationDataFromTagsResponseModel,UpdateTagValuesRequestModel,UpdateTagValuesResponseModel,GetOTPAuthenticationChallengeRequestModel,GetTagDeliveryNetworkDataResponseModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreRequestModel,TransactionallyInsertOrUpdateDataProvidedInRequestMessageBodyIntoTheDatastoreResponseModel,GetVerificationStateMessageResponseModel,QueryBatchesResponseModel,QueryTagsResponseModel,VerifyNXPTagSignatureRequestModel,VerifyNXPTagSignatureResponseModel,FileTransmissionRequestRequestModel,FileTransmissionRequestResponseModel,FileTransmissionReceiptRequestModel,VerifyTagsForAVerificationTypeRequestModel,VerifyTagsForAVerificationTypeResponseModel,VerifyTagsForRoundRockComplianceRequestModel,VerifyTagsForRoundRockComplianceResponseModel,GetVerificationStateMessageRequestModel,GetTagMetadataRequestModel,GetTagMetadataDefinitionResponseModel,GetOTPAuthenticationChallengeResponseModel,ValidateOTPEncryptionResultRequestModel,ValidateOTPEncryptionResultResponseModel){
	

		var result = PlatformAvailabilityEndpointsController.getCheckPlatformAvailability();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Unexpected error in API call. See HTTP response body for details. |
| 503 | TODO: Add an error description |




[Back to List of Controllers](#list_of_controllers)



