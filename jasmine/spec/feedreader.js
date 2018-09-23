/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        // Test that allFeeds has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //Test that each feed has a non empty URL defined
         it('have a non empty URL', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
           });
         });


        // Test that each feed has a non empty name defined
         it('have a name', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
           });
         });
    });

    describe('The menu', function() {
      let body = document.querySelector('body');
      //Test hiding menu by default
      it(' is hidden by default', function() {
        expect(body.hasAttribute('class', 'menu-hidden')).toBe(true);
      });
      //displays when the menu icon is clicked.
      //Is hidden when clicked again
      it('has its visibility toggled by click on the menu icon', function() {
        
      })

    });

    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */

    });

    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */

    });
}());
