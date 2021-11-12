const Discussion = () => {
    return (
        <div className="content-wrapper">
            <div className="discussion-container">
                <div className="discussion">
                    <div className="discussion__logotyps">
                        <img src="https://carline25.ru/assets/images/background/no_avatar.png" alt="Jessica_photo" />
                        <img src="https://carline25.ru/assets/images/background/no_avatar.png" alt="Jessica_photo" />
                    </div>
                    <h3 className="discussion__title">Jessica’s Wedding Plan</h3>
                    <span className="discussion__status">Active Now</span>
                    <div className="discussion__buttons">
                        <button className="discussion__button discussion__button_margin_10px">Call Group</button>
                        <button className="discussion__button">Video Call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discussion;