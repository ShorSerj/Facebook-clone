let initialState = {
    communityBlock: {
        onlineContactsData: [
            {
                id: 1,
                avatar: "https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg",
                name: 'Cierra Vega'
            },
            {
                id: 2,
                avatar: "https://avatars.mds.yandex.net/i?id=f3e17a19823f85f3501629fd55748b35-4841525-images-thumbs&n=13",
                name: "Alden Cantrell"
            },
            {
                id: 3,
                avatar: "https://cdn.pixabay.com/photo/2018/07/08/21/35/human-3524862_1280.jpg",
                name: "Kierra Gentry"
            },
            {
                id: 4,
                avatar: "https://cdn.pixabay.com/photo/2017/04/04/17/55/people-2202472_1280.jpg",
                name: "Bradyn Kramer"
            },
            {
                id: 5,
                avatar: "https://ichef.bbci.co.uk/news/640/cpsprodpb/1352A/production/_103464197_luke-watkin.gif",
                name: "Thomas Crane"
            },

        ],
        discussionData: {
                id: 1,
                img: "https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png",
                name: 'Jessica’s Wedding Plan',
                status: 'Active Now'
        },
    },
    storeData: [
        {
            id: '1',
            img: "https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png",
            alt: "Elephant at sunset",
            name: "Alice Kramer"
        },
        {
            id: '1', img: "https://elikov.ru/upload/image/lessons/polar_panorama/polar_panorama_2.jpg",
            alt: "Elephant at sunset",
            name: "Bradyn Kramer"
        },
        {
            id: '1', img: "https://zayanaflorist.files.wordpress.com/2019/06/kim_face_circle.jpeg",
            alt: "Elephant at sunset",
            name: "Pierre Cox"
        },
    ],
    newsData: [
        {
            id: 1,
            img: "https://fotosuvenir46.ru/components/com_jshopping/files/img_products/kovrik_krugliy_4.jpg",
            name: "Thomas Ben",
            time: "45 mins ago",
            message: "Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there.",
            mess_image_1: "https://avatars.mds.yandex.net/i?id=e5b107de0dc47c5602083a00e1fa39de-5232281-images-thumbs&n=13",
            mess_image_2: "https://mykaleidoscope.ru/uploads/posts/2021-09/1632845699_32-mykaleidoscope-ru-p-pirozhnoe-blazhenstvo-krasivo-foto-33.jpg",
            mess_image_3: "https://mykaleidoscope.ru/uploads/posts/2020-01/1579911305_4-p-pirozhnie-s-vishenkoi-6.png"
        },
        {
            id: 2,
            img: "https://colla-gen.ru/wp-content/uploads/2020/07/8be83f79f3e383be815396d4b97b8d62.png",
            name: "Miranda Shaffer",
            time: "June 21, 12:45 pm",
            message: "Having fun while cooking and eating variety of foods with @Sarah",
            mess_image_1: "https://avatars.mds.yandex.net/i?id=e5b107de0dc47c5602083a00e1fa39de-5232281-images-thumbs&n=13",
            mess_image_2: "https://mykaleidoscope.ru/uploads/posts/2021-09/1632845699_32-mykaleidoscope-ru-p-pirozhnoe-blazhenstvo-krasivo-foto-33.jpg",
            mess_image_3: "https://mykaleidoscope.ru/uploads/posts/2020-01/1579911305_4-p-pirozhnie-s-vishenkoi-6.png"
        },

    ],
}

const homeReducer = (state = initialState, action) => {
    return state
}

export default homeReducer