import yaml from "js-yaml";

export default defineEventHandler(async (event) => {
  const file = yaml.load(
    await $fetch(
      "https://raw.githubusercontent.com/s-complex/Friends/main/list.yml"
    )
  );

  file.forEach((item) => {
    if (item.avatar) {
      item.avatar = `https://api.slirv.vip/linklist/img/${item.avatar}`;
    }
  });

  const jsonContent = JSON.stringify(file, null, 2);
  const utf8EncodedContent = new TextEncoder().encode(jsonContent);

  return new Response(utf8EncodedContent, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
});
