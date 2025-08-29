import yaml from 'js-yaml'

interface FriendsList {
  [key: string]: {
    slogan: string
    avatar: string
    link: string
  }
}

function getRandomEntries<T>(obj: Record<string, T>, count: number): Record<string, T> {
  const entries = Object.entries(obj)

  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[entries[i], entries[j]] = [entries[j], entries[i]]
  }
  return Object.fromEntries(entries.slice(0, count))
}

export default defineCachedEventHandler(async () => {
  const source = await $fetch<string>('https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/list.yml')
  const list = yaml.load(source) as FriendsList

  const result = Object.fromEntries(
    Object.entries(list).map(([key, value]) => [
      key,
      { ...value, avatar: `https://api.insli.cc/linklist/img/${value.avatar}` }
    ])
  )

  return getRandomEntries(result, 5)
}, { maxAge: 86400 })