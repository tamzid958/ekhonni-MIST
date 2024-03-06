package com.dsi.backend.exception;

public class ReqParamNotFoundException extends RuntimeException{
    public ReqParamNotFoundException(String message){
        super(message);
    }
}
