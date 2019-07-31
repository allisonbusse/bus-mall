1. Load page
2. Reset data 
3. Get list of products
4. Pull three random products
    * Ensure none were displayed in the last round
    * Ensure none were chosen in the last three rounds
1. Randomize the order of the images
2. Display images on the page
3. Event Handler
    * Record user’s choice
    * Record views for all three images
    * Increment status bar
1. If not round 25:
    * Remove three images from current set
    * Go back to step 4
1. If round 25:
    * Hide all images
    * Get user’s data of top 3 clicked 
    * Get image of user’s top pick
    * Display/unhide end message 
    * Display/unhide top 5 chart
    * Display/unhide top pick image