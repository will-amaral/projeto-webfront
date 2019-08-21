import { Notification, Delete } from 'bloomer'; 

export default function CustomNotification({ message, color, close}) {
    if (message) {
        return (
        <Notification 
        isColor={color}>
            <Delete onClick={close}/>
            {message}
        </Notification>);
    } else {
        return null;
    }
}