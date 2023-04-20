export interface SearchParams {
    page: number;
    last_page: number;
    sort_field: string;
    sort: string;
    search_string: string | null;
    device_state: string;
    is_archived: boolean;
    paginate: boolean;
    append_fields: string[];
    per_page: number;
};