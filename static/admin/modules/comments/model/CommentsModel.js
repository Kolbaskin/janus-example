Ext.define('Crm.modules.comments.model.CommentsModel', {    
    extend: "Core.data.DataModel"
    ,collection: 'comments' // scope:server
    ,removeAction: 'remove' // scope:server
    ,fields: [{
        name: '_id',
        type: 'ObjectID', // scope:server
        visible: true
    },{
        name: 'pid',
        type: 'ObjectID', // scope:server
        visible: true,
        filterable: true, 
        editable: true
    },{
        name: 'text',
        type: 'string', // scope:server
        filterable: true, 
        editable: true, 
        visible: true 
    }]
})