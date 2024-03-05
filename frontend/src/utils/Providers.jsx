"use client";

import React from "react";
import {ReactNode} from "react";
import {SWRConfig} from "swr";
import {bidFetcher} from "./bidFetcher";


export default function Providers({children}) {
    return <SWRConfig value={bidFetcher}>{children}</SWRConfig>;
}