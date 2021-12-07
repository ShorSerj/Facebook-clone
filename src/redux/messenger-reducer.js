const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
    chatData: {
            img: 'https://sun9-30.userapi.com/impf/c630316/v630316965/38d02/rx6K5RkMMlw.jpg?size=800x531&quality=96&sign=9dafb86e056d5fc16fb44665b02665cb&c_uniq_tag=EmOifIa3jwHmaw82ndpJ1KlNm6i445VZwOgtikhuzUA&type=album',
            name: 'Swathi', status: 'online'
    }
    ,
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
    messages: {
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
        ],
        newMessageText: ''
    }
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case('ADD-MESSAGE'):
            let addMessage = {
                id: 2,
                text: state.messages.newMessageText,
                time: 'Today, 17:01pm'
            }
            state.messages.messageUserData.push(addMessage)
            state.messages.newMessageText = ''
            return state
        case('UPDATE-NEW-MESSAGE-TEXT') :
            state.messages.newMessageText = action.newMessageText;
            return state
        default:
            return state
    }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default messengerReducer