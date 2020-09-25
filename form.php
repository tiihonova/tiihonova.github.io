<?php
session_start();
error_reporting(-1);

ignore_user_abort(true);
set_time_limit(0);

//header("Connection: close", true);
//header("Content-Encoding: none\r\n");
//header("Content-Length: 0", true);

//flush();
//ob_flush();

session_write_close();

$server = $_SERVER['HTTP_HOST'];
$name = $_REQUEST['name'];
if (isset($_REQUEST['tele'])) {
  $phone = $_REQUEST['tele'];
}
if (empty($phone) || empty($name)) {
  echo "I can not send!";
  exit;
}

$bot_addr = "viber://pa?chatURI=olyaray&context=";
$bot_var = "";
if (!empty($name))
	$bot_var = "RlHL".$name."gvUj";
if (!empty($phone))
	$bot_var .= "i0Tt".$phone."lO1M";	
if (!empty($bot_var)) {
    $bot_addr .= $bot_var;
}
else {
	$bot_addr = "viber://pa?chatURI=olyaray&context=tztypQ84";
}	


$_SESSION['name'] = $name;
$_SESSION['phone'] = $phone;

$ip = $_SERVER['REMOTE_ADDR'];

$website = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$website = str_replace('form.php', '', $website);

//$chat_id = '-266531947';
//$token = '943372042:AAEAppyFfoN5OWSQG1fcHYpRFWvkJtGQ2nQ';

$chat_id = '-1001319210364';
$token = '1361334063:AAEkxRzvjFJh63ZI7nKNPdQtT9eIQnJzvLk';


$nameFieldset = "Имя: ";
$phoneFieldset = "Телефон: ";
$additionalFieldset = "UTM метки";


$arr = array(
  'Новая заявка на курс микроблейдинга' => '',
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  'Сайт: ' => $website,
);

if (!empty($_REQUEST['email']))
  $arr['email'] = $_REQUEST['email'];

if (!empty($_REQUEST['utm_source']))
  $arr['utm_source'] = $_REQUEST['utm_source'];

if (!empty($_REQUEST['utm_medium']))
  $arr['utm_medium'] = $_REQUEST['utm_medium'];

if (!empty($_REQUEST['utm_term']))
  $arr['utm_term'] = $_REQUEST['utm_term'];

if (!empty( $_REQUEST['utm_content']))
  $arr['utm_content'] =  $_REQUEST['utm_content'];

if (!empty($_REQUEST['utm_campaign']))
  $arr['utm_campaign'] = $_REQUEST['utm_campaign'];

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "\n";
};
$txt = urlencode($txt);
//file_get_contents()
$sendToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");


$stat = file_get_contents("https://script.google.com/macros/s/AKfycbzdfnGngpo-1yV62LqAXkx0I7oacmfMq9x7BhqfmyQS/exec?name=" . urlencode($name) . "&phone=" . urlencode($phone) . "&utm_source=" . urlencode($arr['utm_source']) . "&utm_medium=" . urlencode($arr['utm_medium']) . "&utm_term=" . urlencode($arr['utm_term']) . "&utm_content=" . urlencode($arr['utm_content']) . "&utm_campaign=" . urlencode($arr['utm_campaign']) . "&email=" . urlencode($_REQUEST['email']));

?>


<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Спасибо, заявка принята.</title>
	
 <style>
body main{text-align:center;font-family:Roboto,sans-serif;font-size:20px;line-height:38px}body section{margin-left:10%;margin-right:10%;height:542px;background-image:url(Thanx_Fon.jpg);background-size:106% 100%;background-repeat:no-repeat;background-position:18% center}.wrap{width:100%;padding-top:50px}section .d_head{background-color:rgba(245,181,238,.6);padding-top:12px;padding-bottom:15px;margin-top:4px}body p{font-family:Roboto,sans-serif;font-size:20px;line-height:25px;font-weight:700}.block_right{width:40%;clear:none;float:left}.block_right .img_block{background-image:url(olga.png);background-size:contain;background-repeat:no-repeat;width:373px;height:470px;margin-top:21px}.block_left{width:60%;clear:none;float:left}.block_left .bonus_pre{margin-top:55px}.img_viber{width:80px;height:80px}.but_viber{margin-top:37px}.block_left .bonus_pre p{font-size:25px}@media (max-width:1000px){body section{margin-left:0;margin-right:0}.wrap{width:100%;padding-top:37px}body section{height:540px}.block_left .bonus_pre p{font-size:22px}.block_right .img_block{width:320px;height:450px;margin-top:53px}.img_viber{width:80px;height:80px}}@media (max-width:800px){body section{margin-left:0;margin-right:0}.block_right .img_block{width:290px;height:390px;margin-top:60px}.wrap{padding-top:10px}.block_left .bonus_pre p{font-size:20px}.block_left .bonus_pre{margin-top:20px}body section{height:460px}}@media (max-width:600px){body section{margin-left:0;margin-right:0}.block_left{width:100%;clear:none;float:left}.wrap .block_right{display:none}.wrap{padding-top:0}.wrap .block_left .d_head{margin-top:0}}@media (max-width:350px){.block_left{width:100%;clear:none;float:left}.wrap .block_left .d_head{margin-top:0}.block_left .d_head h1{font-size:26px}body p{font-family:Roboto,sans-serif;font-size:18px;line-height:20px;font-weight:700}.block_left .bonus_pre p{font-size:18px;line-height:18px}.img_viber{width:70px;height:70px}}
 </style>
	
 <!-- Facebook Pixel Code -->
  <script>
!function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init","301073850476793"),fbq("track","Lead")
  </script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=301073850476793&ev=Lead&noscript=1" /></noscript>
  <!-- End Facebook Pixel Code -->
  
</head>

<body>

 <main>
    <section>
      <div class="wrap">
        <div class="block_left">
		        <div class="d_head">
					<h1>Спасибо за заявку !</h1>
					<p><strong>Мы свяжемся с Вами в самое ближайшее время </strong></p>
				</div>
	      <div class="bonus_pre">
			<p>Забирайте видео-бонус</p>
			<p>"Как проверить симметрию бровей" </p>
			<p>в Viber мессенджере </p>
            <div class="but_viber">
				<a href="<?php echo $bot_addr; ?>" target="new">
			       <img src="but_Viber.png" alt="" class="img_viber"/>
			    </a>
			 </div>
          </div>
        </div>
        <div class="block_right">
	        <div class="img_block"></div>
        </div>	
      </div>
	</section>
 </main>
  <script type="text/javascript">
    setTimeout(function() {
      window.location.replace("index.php");
    }, 30000);
  </script>
</body>
</html>