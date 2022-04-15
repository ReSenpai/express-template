import axios from 'axios';

const baseUrl = 'https://api.test.ru';

const testService = axios.create({
  baseURL: baseUrl,
});

export const testAPI = {
  async getQuery() {
    try {
      const response = await testService.post('/test');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
