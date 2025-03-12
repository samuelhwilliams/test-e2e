// test.js
describe('Google Homepage Test', () => {
    it('should navigate to Google and verify title', async () => {
        // Navigate to Google (baseUrl from config)
        await browser.url('/');
        
        // Get the page title
        const title = await browser.getTitle();
        console.log(`Page title: ${title}`);
        
        // Assert that we're on Google
        await expect(browser).toHaveTitle(expect.stringContaining('Google'));
    });
});
