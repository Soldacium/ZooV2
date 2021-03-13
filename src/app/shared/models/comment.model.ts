export interface Comment{

    _id: string;
    comment: string;
    date: string;
    responses: Array<{
        _id: string,
        comment: string,
        date: string,
    }>;
}
