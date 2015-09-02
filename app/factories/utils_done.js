(function utilsFactoryIIFE(ag){
  var utilsFactory = function(){
    var utils = {};

    utils.displayErrors = function(remoteResponse){
      // Error Handler for remote JSON response
      var msg = 'Error: Sending ' + remoteResponse.config.method + ' ' + remoteResponse.config.url
            + ' , status is ' + remoteResponse.status;
      console.log(msg);
      alert(msg);
    };

    return utils;
  };

  ag.module('customersApp').factory('utilsFactory', utilsFactory);
})(angular);
