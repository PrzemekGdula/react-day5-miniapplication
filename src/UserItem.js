import React from 'react'

import userPlaceholder from './user.svg'

const styles = {
    main: {
        with: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: '50%',
    }
}

const UserItem = (props) => (
    <div
        style={styles.main}
    >
        <div>
            <img
                style={styles.img}
                src={props.user.avatar || userPlaceholder}
                alt={props.user.name}
            />
        </div>
        <div>
            {props.user.name}
            {props.user.email}
        </div>
        <div>
            <button>X</button>
        </div>
    </div >
)

export default UserItem