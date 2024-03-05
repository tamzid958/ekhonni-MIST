import useSWR from "swr";
import type {Bid} from "@/app/types/bid";

export function useBid() {
    return useSWR<Bid>("/products/bids/fetch");
}