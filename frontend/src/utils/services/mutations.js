import {useBid} from "@/utils/services/queries";
import useSWRMutation from "swr/mutation";

export function useCreateBid() {
    const {mutate} = useBid();

    return useSWRMutation('/products/bids/save');
}