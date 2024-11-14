export default defineEventHandler(async (event) => {
  const avatar = getRouterParam(event, "id");
  return await $fetch(
      `https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/img/${avatar}`
  );
});
