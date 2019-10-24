var http = require('http')  /// http modulu

http.createServer(function(request,response){ ///server oluşturma rquest istek response cevap
    response.writeHead(200,{'Content-Type':'text/html'})  ///ne gönderdiğini belirtiyor json veya html olabilir object olarakk gonderilir
    response.end('anan') //tarayıcıdaki görüntü

}).listen(3131)   /// port