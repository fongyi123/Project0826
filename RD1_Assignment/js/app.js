// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();
$(document).ready(function () {
	$("body").css("background-color", "lightblue")
	var jqxhr = $.getJSON(url, function (arr) {   // url是JSON資料的網址，取得的資料存在arr變數中
	  console.log("success");   // 請求成功會執行此區塊，可在此處理JSON資料
	}).done(function (arr) {
	  console.log("second success");   // 另一個請求成功會執行的區塊，也可在此處理JSON資料
	}).fail(function () {
	  console.log("error");   // 請求失敗會執行這個區塊
	}).always(function () {
	  console.log("complete");   // 無論請求成功或失敗都會執行的區塊
	});

  })
// $url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-0EF10C78-E76B-49E3-BD74-05B21416C3F5&format=JSON";  // Your json data url
//   $data = file_get_contents($url);  // PHP get data from url
//   $json = json_decode($data, true);  // Decode json data
//   $date=$data['records']['locations'][0]['location'][0]["locationName"];
//   $data=$data['records']['locations'][0]['location'][0]["weatherElement"];
  require_once('test.php')
//   foreach ( $json as $idx=>$json ) {
// 	echo $idx;
//   }
//   $sql = "INSERT INTO tbl_power(locationName, weatherElement) VALUES('$array[0]',$array[1])";
            // mysql_query($sql,$con);
  // 處理取得的 json 資料
//   var_dump($json['records']['locations'][0]['location']);


// const request = require('request');
// request('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0EF10C78-E76B-49E3-BD74-05B21416C3F5&format=JSON', function (error, response, body) {
//    console.log('原始格式，JSON 格式的字串 — — — — — ');
//    console.log(body);
//    console.log('轉成 JS 物件 — — — — — — — — — — ');
//    console.log(JSON.parse(body));
// });

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "./js" ) );

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
// app.set('views', __dirname + '/view');

// 一切就緒，開始接受用戶端連線
// app.listen(process.env.PORT);
app.listen(80);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");

// 建立資料庫連線
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host : 'localhost',
// 	user : 'root',
// 	password : 'root',
// 	port:8889,
// 	database : 'OPENDATA'
// });

// connection.connect(function(err) {
// 	// if (err) throw err;
// 	if (err) {
// 		console.log(JSON.stringify(err));
// 		return;
// 	}
// });

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log("1 record inserted");
	});
  });

function myFunction() {
	var x = document.createElement("IMG");
	x.setAttribute("src", "./images/Taipei_101.jpg");
	x.setAttribute("width", "304");
	x.setAttribute("height", "228");
	x.setAttribute("style", '""');
	document.body.appendChild(x);
  }

function changeFunc($i) {
	alert($i);
  }


//   var jqxhr = $.getJSON(url, function (arr) {   // url是JSON資料的網址，取得的資料存在arr變數中
// 	console.log("success");   // 請求成功會執行此區塊，可在此處理JSON資料
//   }).done(function (arr) {
// 	console.log("second success");   // 另一個請求成功會執行的區塊，也可在此處理JSON資料
//   }).fail(function () {
// 	console.log("error");   // 請求失敗會執行這個區塊
//   }).always(function () {
// 	console.log("complete");   // 無論請求成功或失敗都會執行的區塊
//   });
