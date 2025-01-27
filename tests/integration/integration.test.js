const { test, expect } = require('@playwright/test');

test.describe('API Integration Tests', () => {
    test('Submit contact form successfully', async ({ request }) => {
        const response = await request.post('/api/submit-form', {
            data: {
                name: 'Test User',
                email: 'test@example.com',
                message: 'Test message',
                topic: 'general'
            }
        });
        
        expect(response.ok()).toBeTruthy();
        const data = await response.json();
        expect(data.message).toBe('Submission saved successfully');
    });

    test('Weather API integration', async ({ page }) => {
        await page.goto('/weather.html');
        
        // Wait for weather data to load
        await page.waitForSelector('#weather-data');
        const weatherText = await page.textContent('#weather-data');
        
        // Verify weather data is loaded and contains temperature
        expect(weatherText).not.toBe('Loading weather data...');
        expect(weatherText).toContain('°C');
    });
});
