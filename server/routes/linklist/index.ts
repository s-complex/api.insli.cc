import yaml from 'js-yaml';

interface Friend {
  slogan: string;
  avatar: string;
  link: string;
}

interface FriendsList {
  [key: string]: Friend;
}

export default defineEventHandler(async (event) => {
  const source = await $fetch<string>('https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/new-format.yml')
  const list = yaml.load(source) as FriendsList;
  Object.keys(list).forEach((key) => {
    list[key].avatar = `https://api.insli.cc/linklist/img/${list[key].avatar}`
  })
  const result = JSON.stringify(list, null, 2);
  return new Response(new TextEncoder().encode(result), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
});
