Ext.define('Crm.modules.news.view.NewsForm', {
    extend: 'Core.form.DetailForm'
    
    ,titleIndex: 'name' // имя поля, данные из которого будут выведены в заголовок окна формы
    
    ,layout: 'border'
    
    ,border: false
    ,bodyBorder: false
    
    ,height: 450
    ,width: 750
    
    // добавим tabpanel в качестве основного елемента
    ,buildItems: function() {
        return [{
            xtype: 'tabpanel',
            region: 'center',
            items: [
                this.buildMainFormTab(),
                this.buildCommentsTab()
            ]
        }]
    }
    // панель с формой новости
    ,buildMainFormTab: function() {
        return {
            xtype: 'panel',
            title: 'Новость',
            layout: 'border',
            items: this.buildMainFormTabItems()
        }
    }
    // поля формы новости
    ,buildMainFormTabItems: function() {
        return [{
            xtype: 'panel',
            region: 'north',
            border: false,
            bodyBorder: false,
            layout: 'anchor',
            bodyStyle: 'padding: 5px;',
            items: [{
                name: 'name',
                anchor: '100%',
                xtype: 'textfield',
                fieldLabel: 'Title'
            },{
                xtype: 'fieldcontainer',
                layout: 'hbox',
                anchor: '100%',
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Date start',
                    name: 'date_start',
                    flex: 1,
                    margin: '0 10 0 0'
                },{
                    xtype: 'datefield',
                    fieldLabel: 'Date finish',
                    name: 'date_end',
                    flex: 1
                }]
            },{
                xtype: 'textarea',
                anchor: '100%',
                height: 60,
                name: 'stext',
                emptyText: 'Announce'
            }]  
        },
            this.fullText()
        ]
    }
    
    ,fullText: function() {
        return Ext.create('Desktop.modules.pages.view.HtmlEditor', {
            hideLabel: true,
            region: 'center',
            name: 'text'
        })
    }

    ,buildCommentsTab: function() {
        return { 
            xtype: 'panel',
            title: 'Comments',
            layout: 'fit',
            // параметр, указывающий, что в данной панели нужно
            // показать связанный модуль
            childModule: {
                // контроллер модуля
                controller: 'Crm.modules.comments.controller.Comments',
                // название поля ключа родительской записи (_id новости)
                outKey: '_id',
                // название поля ключа в дочерней записи (pid в комментариях)
                inKey: 'pid'
        }
        }
    }
})