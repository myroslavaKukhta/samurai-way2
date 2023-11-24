type MessageType = {
    id: number;
    message: string;
};

type DialogItemType = {
    id: number;
    name: string;
};

type PostType = {
    id: number;
    post: string;
};

export const createState = () => {
    const postsData: PostType[] = [
        { id: 1, post: 'To go' },
        { id: 2, post: 'Went' },
        { id: 3, post: 'Gone' },
    ];

    const dialogsData: DialogItemType[] = [
        { id: 1, name: 'Myr' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Volodya' },
        { id: 4, name: 'Vodan' },
    ];

    const messageData: MessageType[] = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Nice to meet you, bro!' },
    ];

    return {
        postsData,
        dialogsData,
        messageData,
    };
};

export const state = createState();
export {};