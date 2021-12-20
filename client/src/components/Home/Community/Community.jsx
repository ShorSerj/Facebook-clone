import DiscussionContainer from './Discussion/DiscussionContainer';
import OnlineContactsContainer from './OnlineContacts/OnlineContactsContainer';

const Community = (props) => {
    return (
        <div className="community-wrapper">
            <DiscussionContainer/>
            <OnlineContactsContainer/>
        </div>
    )
}
export default Community;