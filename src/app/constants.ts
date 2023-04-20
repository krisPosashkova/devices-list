import { SearchParams } from "./models/search.modal";

export const API_URL: string = "https://core.nekta.cloud/api";
export const ACCESS_TOKEN: string = "access_token";
export const DEFAULT_ERROR_LOGIN_MSG: string = "Вход в систему невыполнен";
export const SEARCH_PARAMS: SearchParams = {
    page: 1,
    last_page: 0,
    sort_field: "id",
    sort: "desc",
    search_string: null,
    device_state: "all",
    is_archived: false,
    paginate: true,
    append_fields: ["active_polling", "attributes", "tied_point"],
    per_page: 10
};
