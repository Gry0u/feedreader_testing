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
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      //displays when the menu icon is clicked.
      //Is hidden when clicked again
      it('has its visibility toggled by click on the menu icon', function() {
        let menuIcon = document.querySelector('.menu-icon-link');
          //simulate click event:
          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);

          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    describe('Initial Entries', function() {
      //Test asynchronous load of initial feed entries
      beforeEach(function(done) {
        loadFeed(0, done);
      });
      it('are grabbed and contain at least one entry', function(done) {
        const entries = document.querySelectorAll('.entry');
        expect(entries.length).not.toBe(0);
        done();
      });

    });

    describe('New Feed Selection', function() {
      /*Test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      */
      //to save content of the feeds
      let feeds = [];
      beforeEach(function(done) {
        //load first feed
        loadFeed(0, function() {
          //save content of first feed
          feeds.push(document.querySelector('.feed').innerHTML);
          //load another feed
          loadFeed(1, function() {
            done();
          });
        });
      });

      it('updates when new feed is selected', function() {
          //save content of second feed
          feeds.push(document.querySelector('.feed').innerHTML);
          //compare both
          expect(feeds[0]).not.toEqual(feeds[1]);
      });

    });
}());
