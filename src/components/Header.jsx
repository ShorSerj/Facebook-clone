const Header= () => {
    return (
        <header className='header'>
            <ul className='links'> 
                <li><a>Home</a></li>
                <li><a>Notification</a></li>
                <li><a>Watch</a></li>
                <li><a>Marketplace</a></li>
                <li><a>Groups</a></li>
                <li><a>Messenger</a></li>
                <li><a>Live</a></li>
            </ul>
            <div className="search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <circle cx="8" cy="8.02631" r="7.5" stroke="#788292"/>
                <path d="M14 15L19 19" stroke="#788292"/>
                </g>
                </svg>
            </div>
            <div className="avatar">
                <img src="https://www.figma.com/file/loVIwkHO3saWIhiga6WZAO/FacebookRedesignConceptbyMujtaba?node-id=45%3A112" alt="" />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores rem corporis ut suscipit atque in, ullam dolorum eius cumque, sint quod, laudantium quae dignissimos. Totam quia natus veniam fuga!
            </div>
      </header>
    )
}
export default Header;
