import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

// Додайте імпорт типу PostType
type PostType = {
    id: number;
    post: string;
};

interface ProfileProps {
    postsData: PostType[];
}

const Profile: React.FC<ProfileProps> = ({ postsData }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={postsData} />
        </div>
    );
}

export default Profile;