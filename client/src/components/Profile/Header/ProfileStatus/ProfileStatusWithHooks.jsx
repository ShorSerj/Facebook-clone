import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return(
        <div className="">
            { !editMode &&
                <div className="">
                    <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>
            }
            { editMode &&
                <div className="">
                    <input  autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks