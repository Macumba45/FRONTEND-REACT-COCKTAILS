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
