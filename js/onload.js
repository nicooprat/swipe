var wrapper;
var leftMenu;
var rightMenu;

var distThreshold = 0.5;
var multiplier = 1;
var easeDuration = 200;
var velocityThreshold = .05;

var absVelocity = 0;
var velocity = 0;
var direction = 'left';
var opened = false;
    
function changeDirection( dir )
{
    direction = dir;
    
    if( dir == 'left' )
    {
        $('#left').show();
		$('#right').hide();
    }
    else
    {
    	$('#right').show();
		$('#left').hide();
    }
}

function closeMenu()
{    
	$('#main').css('left','0');
	opened = false;
    wrapper.enable();
    left = parseInt( $('#main').css('left') );
}

function openMenu()
{    	
	if( direction == 'left' ) $('#main').css('left', $('#main').parent().width() * 0.9);
	if( direction == 'right' ) $('#main').css('left', -$('#main').parent().width() * 0.9);
	opened = true;
    wrapper.disable();
    left = parseInt( $('#main').css('left') );
}

$(document).ready(function()
{
	wrapper = new iScroll('wrapper');
	leftMenu = new iScroll('nav-left',{
	    vScrollbar: false
	});
	rightMenu = new iScroll('nav-right',{
	    vScrollbar: false
	});
	
	$('img').load(function()
	{
	    wrapper.refresh();
	});
    
    // Skipping the iPhone url bar
    window.scrollTo(0, 1);
    
    $('.menu .close').bind('touchstart click',function()
    {
        absVelocity = 0;
	    closeMenu();
        return false;
    });
    
    $('#main #header .button').bind('touchstart click',function()
    {
        if( opened )
        {
            closeMenu();
        }
        else
        {
        	absVelocity = 0;
            changeDirection( $(this).attr('data-role') );
            openMenu();
        }
        return false;
    });
    
    $('#main').pep({
    	axis: 'x',
    	cssEaseString: 'linear',
    	cssEaseDuration: easeDuration,
    	multiplier: multiplier,
    	drag: function(e,obj)
    	{
        	/* Avoid exceeding the limits
    		if( parseInt($(obj.el).css('left')) > parseInt($(window).width())*.9 )
    		{
    			$(obj.el).css('left', parseInt($(window).width())*.9);
    		}
    		
    		if( parseInt($(obj.el).css('left')) < -parseInt($(window).width())*.9 )
    		{
    			$(obj.el).css('left', parseInt(-$(window).width())*.9);
    		}
    		*/
    		
        	$(obj.el).css('-webkit-transition','none');
    		
    		if( opened )
    		{
        		if( parseInt( parseInt( $(obj.el).css('left') ) ) < 0 )
        		{
        			changeDirection('right');
        		}
        		else
        		{
        			changeDirection('left');
        		}
    		}
    		else
    		{
    		    obj.forceStop();
    		}
    		
    		velocity = obj._velocity().x;
    		absVelocity = Math.abs( obj._velocity().x );
    	},
    	rest: function(e,obj)
    	{
        	if( absVelocity > ( parseInt( $(window).width() ) * velocityThreshold ) && ( (direction == 'left' && velocity < 0) || (direction == 'right' && velocity > 0) ) )
        	{
    			$(obj.el).css('-webkit-transition-timing-function','linear');
    			closeMenu();
        	}
    		else if( 
        		( parseInt( $(obj.el).css('left') ) > $(obj.el).parent().width() * distThreshold )
        		||
        		( parseInt( $(obj.el).css('left') ) < $(obj.el).parent().width() * -distThreshold ) )
    		{
    			$(obj.el).css('-webkit-transition-timing-function','linear');
    			openMenu();
    		}
    		else
    		{
    			$(obj.el).css('-webkit-transition-timing-function','linear');
    			closeMenu();
    		}
    	}
    });
});