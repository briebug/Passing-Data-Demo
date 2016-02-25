app.service('listenerDataService', function() {

    var item = 1;
    var dataListeners = [];
    var svc = {

        registerDataListener: function(f) {
            dataListeners.push(f);
        },

        changeItem: function() {
            item = Math.floor((Math.random() * 100) + 1);
            this.notifyAll();
        },

        getItem: function(){
            return item;
        },

        notifyAll: function () {
            for (var i = 0; i < dataListeners.length; i++) {
                dataListeners[i].myItem(item);
            }
        }
    }

    return svc;

});