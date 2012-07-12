<!DOCTYPE html>
<html manifest="cache.manifest">
    <head>
    
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="apple-touch-icon-precomposed" href="icon.png" />
    
        <title>Swipe!</title>
        
        <link href='http://fonts.googleapis.com/css?family=Patua+One' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/style.css" />
    
    </head>

    <body>
        
        <div id="left" class="menu">
        	<p id="search">
            	<span id="search_icon">&ocirc;</span>
        	    <input type="text" name="search" id="search_input" placeholder="Search..." />
        	</p>
        	<div class="nav" id="nav-left">
            	<div id="scroller">
            		<ul id="thelist">
                		<li class="subtitle">Navigate</li>
            			<li><a href="#" data-icon="ï">Home</a></li>
                        <li><a href="#" data-icon="M">Our work</a></li>
                        <li><a href="#" data-icon="+">Our clients</a></li>
                        <li><a href="#" data-icon="_">Who are we ?</a></li>
                        <li><a href="#" data-icon="9">Get in touch</a></li>
                        <li class="subtitle">Buy online</li>
                        <li><a href="#" data-count="13">Shoes</a></li>
                        <li><a href="#" data-count="25">Shirts</a></li>
                        <li><a href="#" data-count="8">Hats</a></li>
                        <li><a href="#" data-count="12">Bags</a></li>
                        <li><a href="#" data-count="34">Accessories</a></li>
                        <li class="subtitle">Your account</li>
                        <li><a href="#" data-icon="ñ">Notifications</a></li>
                        <li><a href="#" data-icon="@">Settings</a></li>
                        <li><a href="#" data-icon="X">Logout</a></li>
            		</ul>
            	</div>
            </div>
        </div>
        
        <div id="right" class="menu">
        	<p id="title">Favorites</p>
        	<div class="nav" id="nav-right">
            	<div>
            		<ul>
            			<li><a href="#">Product #1</a></li>
            			<li><a href="#">Product #2</a></li>
            			<li><a href="#">Product #3</a></li>
            			<li><a href="#">Product #4</a></li>
            			<li><a href="#">Product #5</a></li>
            			<li><a href="#">Product #6</a></li>
            			<li><a href="#">Product #7</a></li>
            			<li><a href="#">Product #8</a></li>
            			<li><a href="#">Product #9</a></li>
            			<li><a href="#">Product #10</a></li>
            			<li><a href="#">Product #11</a></li>
            			<li><a href="#">Product #12</a></li>
            			<li><a href="#">Product #13</a></li>
            			<li><a href="#">Product #14</a></li>
            			<li><a href="#">Product #15</a></li>
            		</ul>
            	</div>
            </div>
        </div>
        
        <div id="main">
        	<div id="header">
            	<a class="button" data-role="left" href="#">i</a>
            	<strong>Swipe!</strong>
            	<a class="button" data-role="right" href="#">7</a>
        	</div>
            <div id="wrapper">
            	<div id="scroller">
            		<div id="content">
                		
                		<p id="download">
                		    <a href="https://github.com/nicooprat/swipe/zipball/master">Download</a>
                		</p>
                		
                		<?php
                		    include_once "inc/markdown.php";
                		    $readme = file_get_contents("readme.md");
                            $readme = Markdown($readme);
                            echo $readme;
                		?>
                		
            		</div>
            	</div>
            </div>
            
            <div id="footer">
                <ul>
                    <li><a href="#">ï</a></li>
                    <li><a href="#">â</a></li>
                    <li><a href="#">å</a></li>
                    <li><a href="#">/</a></li>
                </ul>
            </div>
        </div>
        
        <script type="text/javascript" src="js/iscroll.js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/jquery.pep.js"></script>
        <script type="text/javascript" src="js/onload.js"></script>
        
    </body>
</html>