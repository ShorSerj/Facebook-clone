const Discussion = () => {
    return (
        <div className="discussion-container">
            <div className="discussion">
                <div className="discussion__logotyps">
                    <img src="https://carline25.ru/assets/images/background/no_avatar.png" alt="Jessica_photo" />
                    <img src="https://carline25.ru/assets/images/background/no_avatar.png" alt="Jessica_photo" />
                </div>
                <h3 className="discussion__title">Jessica’s Wedding Plan</h3>
                <span className="discussion__status">Active Now</span>
                <div className="discussion__buttons">
                    <button className="discussion__button discussion__button_margin_10px">
                        <svg className="call-svg"width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.39147 0.470488C3.71367 0.620865 3.97143 2.6617 4.20771 3.34914C4.27215 3.54249 4.22919 3.75731 4.07883 3.90769C3.60627 4.35882 3.13371 4.80996 2.66115 5.26109C3.58479 7.04414 4.98099 8.35457 6.74235 9.34277C7.17195 8.91312 7.60155 8.48347 8.00967 8.05382C8.24595 7.81751 8.46075 7.75306 8.80443 7.88196C9.44884 8.13975 11.425 8.35457 11.5539 8.69829V11.3621C11.425 11.4481 10.1577 11.6199 8.67556 11.2977C4.61583 10.4599 1.45827 7.0871 0.62055 3.04839C0.21243 1.09348 0.53463 0.534935 0.62055 0.449005H3.39147V0.470488Z" fill="#1877F2"/>
                        </svg>
                        <span className="discussion__button-title">Call Group</span> 
                    </button>
                    <button className="discussion__button">
                        <svg className="video-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9739 5.09135L11.1051 6.16547L10.1385 6.72402V5.58544C10.1385 4.57577 9.3223 3.75943 8.31274 3.75943H3.5227C2.51314 3.75943 1.6969 4.57577 1.6969 5.58544V10.3975C1.6969 11.4072 2.51314 12.2235 3.5227 12.2235H8.33422C9.34378 12.2235 10.16 11.4072 10.16 10.3975V9.23747L11.1266 9.79602L12.9954 10.8701C13.5753 11.1924 14.2842 10.7842 14.2842 10.1183V7.97V5.82175C14.2627 5.15579 13.5539 4.74763 12.9739 5.09135Z" fill="#1877F2"/>
                        </svg>
                        <span className="discussion__button-title">Video Call</span> 
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Discussion;