Ext.define('Crm.modules.comments.view.CommentsForm', {
    extend: 'Core.form.DetailForm'
 
    ,titleIndex: 'text' // имя поля, данные из которого будут выведены в заголовок окна формы
    
    ,buildItems: function() {
        return [
        // поле для ввода текста комментария
        {
             fieldLabel: 'Comment text',
             name: 'text',
             xtype: 'textarea',
             anchor: '100%',
             height: 150
        }, 
        // идентификатор записи к которой относится редактируемый комментарий
        // заполняется автоматически
        {
             name: 'pid',
             hidden: true
        }]
    }
})