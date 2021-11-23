import Discussion from './Discussion/Discussion';
import OnlineContacts from './OnlineContacts/OnlineContacts';

const Community = (props) => {
    return (
        <div className="community-wrapper">
            <Discussion discussionData={props.communityBlock.discussionData}/>
            <OnlineContacts onlineContactsData={props.communityBlock.onlineContactsData}/>
        </div>
    )
}
export default Community;