interface Data {
    title: string;
    date: Date | number | string;
    updated: Date | number | string;
    link: string;
    description: string;
}

export default defineEventHandler(async () => {
    const [res1, res2] = await Promise.all([
        $fetch<Data[]>('https://blog.gxres.net/latest-posts.json'),
        $fetch<Data[]>('https://thoughts.gxres.net/latest-posts.json')
    ])

    const notebookData = res1.map(item => ({ ...item, source: { title: 'Restent\'s Notebook', link: 'https://blog.gxres.net' } }));
    const thoughtsData = res2.map(item => ({ ...item, source: { title: 'R2\'s thoughts', link: 'https://thoughts.gxres.net' } }));

    const mergedArray = [...notebookData, ...thoughtsData];

    return mergedArray.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
})