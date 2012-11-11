/* ------------------
 *
 * Variables
 *
 * ------------------
 */
 
// Edit this options to fit your needs
var distThreshold = 0.5;        // when closing a menu by dragging it, how much distance ratio should be dragged ? (between 0-1)
var multiplier = 1;             // when dragging, how fast the menu should move below our finger ? (less than 1 is slower, more is faster)
var easeDuration = 200;         // when the menu closes itself, how much time should it last ? (in milliseconds)
var velocityThreshold = .05;    // we can close a menu by dragging it far enough, OR fast enough. This variable is for the 2nd scenario.

// Stop editing
var wrapper;
var leftMenu;
var rightMenu;

var absVelocity = 0;
var velocity = 0;
var direction = 'left';
var opened = false;

/* ------------------
 *
 * Functions
 *
 * ------------------
 */

/*
 * Update direction var and show or hide the menu concerned
 * @param dir string
 * @return null
 * 
 */
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

/*
 * Close left or right menu
 * @return null
 * 
 */
function closeMenu()
{    
	$('#main').css('left','0');
	opened = false;
    wrapper.enable();
    left = parseInt( $('#main').css('left') );
}

/*
 * Open left or right menu
 * @return null
 * 
 */
function openMenu()
{    	
	if( direction == 'left' ) $('#main').css('left', $('#main').parent().width() * 0.9);
	if( direction == 'right' ) $('#main').css('left', -$('#main').parent().width() * 0.9);
	
	opened = true;
    wrapper.disable(); // Disable iScroll on main wrapper
    left = parseInt( $('#main').css('left') );
}

/* ------------------
 *
 * Initialization
 *
 * ------------------
 */

$(document).ready(function()
{
    // Initialize iScrolls
    // More infos here : http://cubiq.org/iscroll-4
	wrapper = new iScroll('wrapper');
	leftMenu = new iScroll('nav-left',{
	    vScrollbar: false
	});
	rightMenu = new iScroll('nav-right',{
	    vScrollbar: false
	});
	
	// Hack : refresh iScrolls when img finished loading (wrong height issue)
	$('img').load(function()
	{
	    wrapper.refresh();
	    leftMenu.refresh();
	    rightMenu.refresh();
	});
    
    // Skipping the iPhone url bar
    window.scrollTo(0, 1);
    
    // Avoid orientation change issues
    $(window).bind('orientationchange',function()
    {
        closeMenu();
    });
    
    // Bind on header buttons
    $('#main #header .button').bind('touchstart click',function()
    {
        if( opened )
        {
            closeMenu();
        }
        else
        {
        	absVelocity = 0; // Manually reset velocity to avoid calc mistakes
            changeDirection( $(this).data('role') ); // Get direction by data-role attribute
            openMenu();
        }
        return false;
    });
    
    // Here the magic happens
    // Bind jQuery Pep to our main area.
    $('#main').pep({
    	axis: 'x',
    	cssEaseString: 'linear',
    	cssEaseDuration: easeDuration,
    	multiplier: multiplier,
    	drag: function(e,obj) // When dragging...
    	{	
        	// Avoid CSS transition conflict when dragging
        	$(obj.el).css('-webkit-transition','none');
    		
    		// Allow dragging only when a menu is opened
    		// Avoid opening it by mistake
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
    		
    		// Update velocity
    		velocity = obj._velocity().x;
    		absVelocity = Math.abs( obj._velocity().x );
    	},
    	rest: function(e,obj) // When releasing...
    	{
        	if( absVelocity > ( parseInt( $(window).width() ) * velocityThreshold ) // If it has been dragged FAST enought
            	&&
            	(
            	   (direction == 'left' && velocity < 0) // Avoid closing by dragging to the other side
            	   ||
            	   (direction == 'right' && velocity > 0) // Avoid closing by dragging to the other side
        	   ))
        	{
    			closeMenu();
        	}
    		else if( 
        		( parseInt( $(obj.el).css('left') ) > $(obj.el).parent().width() * distThreshold ) // If it has NOT been dragged FAR enought
        		||
        		( parseInt( $(obj.el).css('left') ) < $(obj.el).parent().width() * -distThreshold )) // If it has NOT been dragged FAR enought
    		{
    			openMenu();
    		}
    		else
    		{
    			closeMenu();
    		}
    	}
    });
});