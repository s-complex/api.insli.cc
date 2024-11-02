export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const target = query.check as string;

  console.log('Received target URL:', target);

  try {
    const response = await $fetch.raw(target);
    console.log('Response status:', response.status);
    return {
      statusCode: response.status,
      statusMessage: response.statusText
    };
  } catch (error) {
    console.error('Error response:', error.response?.status);
    return {
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Internal Server Error'
    };
  }
});
