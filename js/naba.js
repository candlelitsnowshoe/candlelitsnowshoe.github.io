
        
        // Retrieve and store the height of the first section so we know when to pop out the nav menu.
        var top_section_height = 600; //$('#top_section').height();  
        var navbar = $('#header');

        // JQuery code for the Sticky Top Menu.
        $(window).scroll(function()
        {
            
            if ($(this).scrollTop() >= (top_section_height - 50))  // Pop out the nav menu once we scroll past the top of the page.
            {                            
                navbar.css( "position", "fixed");
                navbar.css( "opacity", "1");
            }
            else if ($(this).scrollTop() <= (top_section_height - 150)) // Put the navbar back at the top when user is scrolling up and close to the top
            {
               navbar.css( "position", "absolute");
               navbar.css( "opacity", "1")     
            }
            else 
            { 
               navbar.css( "position", "absolute");
               navbar.css( "opacity", "0");
            } 
        });	
		
		// Sample hiding / showing based on event type		
		function filterEventList(type)
		{ 
			// Remove the active flag from all the filters.
			$('#calendarFilter span').removeClass('active');
			
			if (type == 'events')
			{
				// Only show the Special EVENTS
				$('#eventList .event').hide().filter('[data-event-type="event"]').show();				
				$('#specialEvents').addClass('active');
				
			}
			else if (type == 'meetings')
			{
				// Only show the Monthly Meetings.
				$('#eventList .event').hide().filter('[data-event-type="meeting"]').show();
				$('#meetingEvents').addClass('active');
			}
			else
			{
				// Show everything				
				$('#eventList .event').show();
				$('#allEvents').addClass('active');
			}
		}
            
        
        // This function shows and hides the navigation menu since it's hidden on small-medium screens.
        // This takes advantage of CSS transitions to handle the movement and fading/hiding.  
        function showMenu()
        {           
            var menu = document.getElementById("pullOutMenu");            
            if (menu.style.opacity < 1)
            {
                // Make the Menu Visible
                menu.style.opacity = 1;                
                menu.style.height = '250px';
            }
            else
            {
                // Hide the Menu
                menu.style.opacity = 0.0;                
                menu.style.height = '0px';
            }		
        }
        
        // This function makes sure the current navigation heading is highlighted after it is clicked.
        function updateNav(index)
        {
            // Grab the list of navigation elements and remove highlight from all of them....only one is going to be set but it's
            // easier to remove from all at once.
            var menu_items = $('.nav ul li').removeClass('current');
            
            // Add the class to high the element which was clicked on.
            menu_items.eq(index).addClass('current');      
        }