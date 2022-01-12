import React from 'react'
import preloader from '../../../assets/images/loader.gif'

let Preloader = React.memo(props => {
    return <div>
            <img src={preloader} />
        </div>
    
})
export default Preloader