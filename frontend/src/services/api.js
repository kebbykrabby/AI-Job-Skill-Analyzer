const BASE_URL = 'http://localhost:4000/api';

export const fetchLogs = async ({ page = 1, limit = 10, sortBy, sortOrder, filters }) => {
  
  const params = new URLSearchParams({
    page,
    limit,
    sortBy,
    sortOrder,
    country: filters.country || '',
    client: filters.client || ''
  });
  
  const res = await fetch(`${BASE_URL}/logs?${params.toString()}`);
  return res.json();
};

export const sendPrompt = async (prompt) => {
  const res = await fetch(`${BASE_URL}/ai-query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  return res.json();
};
