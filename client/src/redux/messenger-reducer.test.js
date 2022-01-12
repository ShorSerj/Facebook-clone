import messengerReducer, { AddMessageActionCreator } from "./messenger-reducer"


let state = {
    messages: {
        messageUserData: [
            {
                id: 1,
                text: 'Hey!',
                time: 'Today, 8:22pm'
            }
        ],
        newMessageText: 'Hello'
    }
}

it('length of messages should be incremented', ()  => {
    let action = AddMessageActionCreator("it-kamasutra.com")
     
    let newState = messengerReducer(state, action)

    expect(newState.messages.messageUserData.length).toBe(2)
})