
export function throwApiError(message,status){
    throw new Error(message+' with status code '+status);
}
export function throwServerError(message,status){
    throw new Error(message+' with status code '+status);
}
export function throwNetworkError(message,status){
    throw new Error(message+' with status code '+status);
}