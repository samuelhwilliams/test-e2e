// test.js - Using Jasmine framework
describe('Google Homepage Test', () => {
    it('should navigate to Google and verify title', async () => {
        // Navigate to Google (baseUrl from config)
        await browser.url('/');
        
        // Get the page title
        const title = await browser.getTitle();
        console.log(`Page title: ${title}`);
        
        // Jasmine assertion to verify we're on Google
        expect(title).toContain('Google');
    });
});
