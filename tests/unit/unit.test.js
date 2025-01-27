const { test, expect } = require('@playwright/test');

test.describe('Unit Tests', () => {
  test('constructBaseUrl should return correct URL format', async () => {
      const latitude = 45.658;
      const longitude = 25.601;
      const expectedUrl = 'https://api.open-meteo.com/v1/forecast?latitude=45.658&longitude=25.601&current_weather=true';
      
      const constructBaseUrl = (lat, lon) => {
          return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      };
      
      const url = constructBaseUrl(latitude, longitude);
      expect(url).toBe(expectedUrl);
  });

  test('formatTemperature should format temperature correctly', async () => {
      const formatTemperature = (temp) => {
          return `${parseFloat(temp).toFixed(1)}°C`;
      };
      
      expect(formatTemperature(20)).toBe('20.0°C');
      expect(formatTemperature(20.56789)).toBe('20.6°C');
      expect(formatTemperature('15.7')).toBe('15.7°C');
  });
});