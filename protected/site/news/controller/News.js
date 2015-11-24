Ext.define('Crm.site.news.controller.News',{
    extend: "Core.Controller"
    
    ,show: function(params, cb) {
        if(params.pageData.page) 
            this.showOne(params, cb)
        else
            this.showList(params, cb)
    }
    
    ,showOne: function(params, cb) {
        var me = this
            ,out = {}
            // создадим экземпляр модели комментариев
            ,commentsModel = Ext.create('Crm.modules.comments.model.CommentsModel', {
                scope: me
            });
        [
            function(next) {
                // если в запросе есть параметр "comment"
                // создадим новый комментарий
                if(params.gpc.comment) {
                    commentsModel.write({
                        pid: params.pageData.page, // идентификатор новости
                        text: params.gpc.comment // текст комментария
                    }, function() {
                        next(true) // к следующему шагу       
                    }, {add: true}); // последний параметр -- список разрешений
                } else
                    next(false) // к следующему шагу
            }
            ,function(isCommentCreated, next) { 
                out.isCommentCreated = isCommentCreated; // комментарий отправлен
                // получим список комментариев текущей новости
                commentsModel.getData({
                    filters: [{property: 'pid', value: params.pageData.page}]
                }, function(data) {
                    out.comments = data.list;
                    next()           
                })
            }
            ,function(next) {    
                // прочитаем карточку новости 
                Ext.create('Crm.modules.news.model.NewsModel', {
                    scope: me
                }).getData({
                    filters: [{property: '_id', value: params.pageData.page}]
                }, function(data) {
                    if(data && data.list && data.list[0])
                        out = Ext.merge(out, data.list[0])                    
                    me.tplApply('.one', out, cb)            
                }); 
            }
        ].runEach()
    }
    
    ,showList: function(params, cb) {
        var me = this;
        Ext.create('Crm.modules.news.model.NewsModel', {
            scope: me
        }).getData({
            filters: []    
        }, function(data) {
            me.tplApply('.list', data, cb)            
        }); 
    }

});