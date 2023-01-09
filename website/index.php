<?php include  $_SERVER['DOCUMENT_ROOT']."/db.php"; ?>
<!doctype html>
<head>
<meta charset="UTF-8">
<title>축제게시판</title>
<link rel="stylesheet" type="text/css" href="/css/phpstyle.css?ver=1">
</head>
<body>
<div id="board_area">
  <br> 
  <h1>🎡축제 목록</h1>
   
    <table class="list-table">
      <thead>
          <tr>
              <th width="100">번호</th>
              <th width="100">지역</th>
                <th width="500">이름</th>
                <th width="120">시작일</th>
                <th width="100">종료일</th>
                <th width="100">유형</th>
            </tr>
        </thead>
        <?php
        
          $sql = mq("select * from  dbabfestival order by idx asc limit 1,100"); 
            while($board = $sql->fetch_array())
            {
              
        ?>
      <tbody>
        <tr>
          <td width="100"><?php echo $board['idx']; ?></td>
          <td width="100"><?php echo $board['지역']; ?></td>
          <td width="70"><?php echo $board['이름']; ?></td>
          <td width="120"><?php echo $board['시작일']?></td>
          <td width="100"><?php echo $board['종료일']?></td>
          <td width="100"><?php echo $board['유형']; ?></td>
        </tr>
      </tbody>
      <?php } ?>
    </table>
    <div id="write_btn">
      <a href="http://playgajo.netlify.app/"><button>👍🏻</button></a>
    </div>
  </div>
</body>
</html>