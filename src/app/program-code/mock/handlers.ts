import { http, HttpResponse } from 'msw';
import { SaveRequestBody, SaveResponse } from '../types/types';

export const handlers = [
    http.post('/api/save', async ({ request }) => {
      const { code, name } = await request.json() as SaveRequestBody;
      return HttpResponse.json<SaveResponse>({
        message: 'Data saved successfully',
        data: { code, name },
      });
    }),
  ];