"use client";

import React from "react";
import {ReactNode} from "react";
import {SWRConfig} from "swr";
import {fetcher} from "./fetcher";


export default function Providers({children}) {
    return <SWRConfig value={fetcher}>{children}</SWRConfig>;
}