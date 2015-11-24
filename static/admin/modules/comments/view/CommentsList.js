Ext.define('Crm.modules.comments.view.CommentsList', {
    extend: 'Core.grid.GridWindow',    
    
    // в таблице списка будет только одна колонка с текстами комментариев
    buildColumns: function() { 
        return [{
            text: 'Comment',
            flex: 1,
            sortable: true,
            dataIndex: 'text',
            filter: true
        }]        
    }   
})