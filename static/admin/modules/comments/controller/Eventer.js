Ext.define('Crm.modules.comments.controller.Eventer', {
    extend: 'Core.controller.Controller', 
    autorun: function() {
        // Подпишимся на события модели модуля комментариев
        // 1й параметр -- идентификатор подписчика (произвольная строка)
        // 2й параметр -- имя класса модели, за которой следим
        // 3й -- каллбэк функция
        Core.ws.subscribe('eventer', 'Crm.modules.comments.model.CommentsModel', function(eventName, data) {
            // eventName -- имя события (ins, upd, del и т.д.)
            if(eventName == 'ins' && confirm('Новый комментарий. Открыть форму модерации?'))
                location = '#!Crm-modules-comments-controller-Comments_' + data._id
        })  
    }
});