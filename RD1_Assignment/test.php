<?php
    // ------
    $link = @mysqli_connect("localhost", "root", "root",null,8889) or die(mysqli_connect_error());
    $result = mysqli_query($link, "set names utf8");
    mysqli_select_db($link, "OPENDATA");

    //天氣預報 
    $url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-0EF10C78-E76B-49E3-BD74-05B21416C3F5&format=JSON";  // Your json data url
    $data = file_get_contents($url);  // PHP get data from url
    $json = json_decode($data, true);  // Decode json data
    
    // var $locationName = 'locationName';

    // 2. 執行 SQL 敘述
    $commandText = "select * from weather";
    $result = mysqli_query($link, $commandText);
    
    // 3. 處理查詢結果
    while ($row = mysqli_fetch_assoc($result))
    {
      echo "ID：{$row['cID']}<br>";
      echo "Name：{$row['cName']}<br>";
      echo "<HR>";
    }
    
    // 4. 結束連線
    mysqli_close($link);
    
 
    //  $ins_qry = 'INSERT INTO json_table(jsonvalues) values ("'.$json.'")';
    //  $exec_qry = mysqli_query($link,$ins_qry);
    // $connect->close();

    // 處理取得的 json 資料
    var_dump($json['records']['locations'][0]['location'][0]["locationName"]);
    // foreach ( $json as $idx=>$json ) {
    //     if(is_array($json))
    //     {
    //       foreach($json as $iidx=>$jjson) 
    //       {
    //           echo $iidx.":".$jjson;
    //       }
    //     }
    //     else
    //     {
    //       echo $idx.":".$json;
    //     }
    //  }
    // $host="localhost";
    // $user="root";
    // $pass="root";
    // $db="OPENDATA";
    // $port=8889;
    // // mysql_query("SET NAMES 'utf8'");
    // // mysql_select_db($dbname);
    // $connect= new mysqli($host,$user,$pass,$db,$port) or die("ERROR:could not connect to the database!!!");
?>