const { test, expect } = require('@playwright/test');

test.describe('Performance Tests', () => {
    test('Page load performance', async ({ page }) => {
        // Start performance measurements
        const startTime = Date.now();
        
        await page.goto('/');
        
        // Calculate load time
        const loadTime = Date.now() - startTime;
        expect(loadTime).toBeLessThan(4000); // Page should load under 4 seconds
        
        // Check image loading
        const images = await page.$$('img');
        for (const image of images) {
            const loaded = await image.evaluate(img => img.complete && img.naturalHeight !== 0);
            expect(loaded).toBeTruthy();
        }
        
        // Check if main content sections are present
        const headerExists = await page.$('header');
        const mainExists = await page.$('main');
        const footerExists = await page.$('footer');
        
        expect(headerExists).toBeTruthy();
        expect(mainExists).toBeTruthy();
        expect(footerExists).toBeTruthy();
    });
});
