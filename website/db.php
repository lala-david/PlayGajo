
<?php

header('Content-Type: text/html; charset=utf-8'); // utf-8인코딩
 
$db = new mysqli("localhost","lala","1234","mysql"); 
$db->set_charset("utf8");
 

 
function mq($sql)
{
    global $db;
    return $db->query($sql);
}
?>
