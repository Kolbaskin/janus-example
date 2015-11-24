<h4>
    {name} 
    <i class="date">Дата: {[Ext.Date.format(new Date(values.date_start),'d.m.Y')]}</i>
</h4>
{text}

<tpl if="isCommentCreated">
Комментарий отправлен.
</tpl>

<h4>Комментарии</h4>
<tpl for="comments">
<p>{text}</p>
</tpl>

<form method="post">
<textarea rows="5" cols="50" name="comment"></textarea><br>
<button type="submit">Отправить</button>
</form>


