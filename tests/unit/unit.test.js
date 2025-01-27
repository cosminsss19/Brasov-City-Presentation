const { test, expect } = require('@playwright/test');

test.describe('Unit Tests', () => {
    test('Contact form validation - empty fields', async ({ page }) => {
        await page.goto('/contact.html');
        
        // Create a handler for window.alert
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Please fill out all fields.');
            await dialog.accept();
        });
        
        // Submit empty form
        await page.click('button[type="submit"]');
    });
    
    test('Navigation menu visibility', async ({ page }) => {
        await page.goto('/');
        
        // Check if navigation menu exists
        const navMenu = await page.$('.navbar-nav');
        expect(navMenu).toBeTruthy();
        
        // Check if all menu items are present
        const menuItems = await page.$$('.nav-item');
        expect(menuItems.length).toBe(5); // Home, About, Services, Contact, Weather
    });
});