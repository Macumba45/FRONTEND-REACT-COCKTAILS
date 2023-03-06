export type Props = {
    email?: string;
    password?: string;
};

export type FieldProps = {
    field: {
        value: string;
        name: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    };
    meta: {
        error?: string;
        touched: boolean;
    };
};

export type Response = {

    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;


}
