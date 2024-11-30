import Avatar from "./Avatar";

function Profile() {
    return (
        <>
            <Avatar size={30} person={{name: 'Kim', imageId: 'YfeOqp2'}} />
            <Avatar size={60} person={{name: 'Lee', imageId: 'OKS67lh'}} />
            <Avatar size={90} person={{name: 'Park', imageId: '1bX5QH6'}} />
        </>
    );
}

export default Profile;