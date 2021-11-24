import {renderEntryTree} from "../render";

let state = {
    homePages: {
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
                    avatar: "http://www.weareart.ru/public/uploads/news/967/b-IMG_2128edfef1b9.jpg",
                    name: "Thomas Crane"
                },

            ],
            discussionData: [
                {
                    id: 1,
                    photo: "https://carline25.ru/assets/images/background/no_avatar.png",
                    name: 'Jessica’s Wedding Plan',
                    status: 'Active Now'
                }
            ],
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
    },
    messengerPages: {
        contactData: [
            {
                img: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200',
                name: 'Raghav', message: 'Dinner?', id: '1'
            },
            {
                img: 'https://sun9-30.userapi.com/impf/c630316/v630316965/38d02/rx6K5RkMMlw.jpg?size=800x531&quality=96&sign=9dafb86e056d5fc16fb44665b02665cb&c_uniq_tag=EmOifIa3jwHmaw82ndpJ1KlNm6i445VZwOgtikhuzUA&type=album',
                name: 'Swathi', message: 'Sure!', id: '2'
            },
            {
                img: 'https://cdn.trangcongnghe.com/uploads/posts/2017-11/iphone-x-thu-t224i-x243a-ph244ng-voi-canon-5d-mark-iii-chi-thieu-ch250t-l224-ho224n-hao_8.jpg',
                name: 'Kiran', message: 'Hi.....', id: '3'
            },
            {
                img: 'https://img.novosti-n.org/upload/ukraine/729859.jpg',
                name: 'Tejeshwini C', message: 'I will call him today.', id: '4'
            },
        ],
        chatData: [
            {
                img: 'https://sun9-30.userapi.com/impf/c630316/v630316965/38d02/rx6K5RkMMlw.jpg?size=800x531&quality=96&sign=9dafb86e056d5fc16fb44665b02665cb&c_uniq_tag=EmOifIa3jwHmaw82ndpJ1KlNm6i445VZwOgtikhuzUA&type=album',
                name: 'Swathi', status: 'online'
            }
        ],
        groupData: [
            {
                img: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200',
                name: 'Raghav', message: 'Dinner?'
            },
            {
                img: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200',
                name: 'Raghav', message: 'Dinner?'
            },
            {
                img: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200',
                name: 'Raghav', message: 'Dinner?'
            }
        ],
        messages : {
            messageInterlocutorData: [
                {
                    id: 1,
                    text: 'Hey There !',
                    time: 'Today, 2:01pm'
                }
            ],
            messageUserData: [
                {
                    id: 1,
                    text: 'Hey!',
                    time: 'Today, 8:22pm'
                }
            ]
        }
    },
}
export let addMessageUser = (newMessage) => {
    let addMessage = {
        id:2,
        text: newMessage,
        time: 'Today, 17:01pm'

    }
    state.messengerPages.messages.messageUserData.push(addMessage)
    renderEntryTree(state)
}
export default state