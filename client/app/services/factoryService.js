app.factory('factoryDataService', function() {

    var item = 1;
    var svc = {
        changeItem: function() {
            item = Math.floor((Math.random() * 100) + 1);
        },

        getItem: function(){
            return item;
        }
    }

    return svc;

});