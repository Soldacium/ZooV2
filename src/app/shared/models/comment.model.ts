export interface Comment{

    _id: string;
    comment: string;
    date: string;
    responses: [{
        _id: string,
        comment: string,
        date: string,
    }];
}
