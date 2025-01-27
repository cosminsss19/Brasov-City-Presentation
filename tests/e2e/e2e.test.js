const { test, expect } = require('@playwright/test');

test.describe('E2E Tests', () => {
    test('Complete user journey', async ({ page }) => {
        // Start from homepage
        await page.goto('/');
        
        // Navigate to About page
        await page.click('text=About');
        expect(page.url()).toContain('/about.html');
        
        // Check carousel functionality
        await page.waitForSelector('#imageCarousel');
        const carouselExists = await page.$('#imageCarousel');
        expect(carouselExists).toBeTruthy();
        
        // Navigate to Contact page
        await page.click('text=Contact');
        expect(page.url()).toContain('/contact.html');
        
        // Fill and submit contact form
        await page.fill('#name', 'Test User');
        await page.fill('#email', 'test@example.com');
        await page.fill('#message', 'Test message');
        await page.selectOption('#topic', 'general');
        await page.click('button[type="submit"]');
        
        // Verify success message
        await page.waitForSelector('#form-feedback', { state: 'visible' });
        const feedbackText = await page.textContent('#form-feedback');
        expect(feedbackText).toContain("Thank you for your message");
    });
});