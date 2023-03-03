export type Props = {
    email: string;
    name: string;
    id: string;
};

export type UserPost = {
    id: string;
    title: string;
    category: string;
    image: string;
    comment: string;
    user_FK: string;
    createdAt: string;
    updatedAt: string;
};
