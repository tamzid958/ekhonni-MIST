package com.dsi.backend.exception;

public class FinalBuyerNotFoundException extends RuntimeException{
    public FinalBuyerNotFoundException(String message){
        super(message);
    }
}