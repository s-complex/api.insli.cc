import yaml from "js-yaml";

interface Friend {
  name: string,
  slogan: string,
  avatar: string,
  link: string
}

export default defineEventHandler(async (event) => {
  const file = yaml.load(
    await $fetch(
      "https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/list.yml"
    )
  ) as Friend[];

  file.forEach((item: { avatar: string; }) => {
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
