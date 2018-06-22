import React from 'react';


self.AddEventListener('push', e => {
    const data = e.data.json()
    const {title} = data

    const body = {
        body:data.body,
        icon: data.icon
    }
    e.waitUntil(self.registration.showNotification(title,body))
})



const Notifications = props =>{
    render(
        <div></div>
    )
}

export default Notifications;