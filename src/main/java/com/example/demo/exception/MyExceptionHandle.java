package com.example.demo.exception;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MyExceptionHandle {
    private static final Logger LOG = LoggerFactory.getLogger(MyExceptionHandle.class);

    @ExceptionHandler(LimitException.class)
    public Object Handle(Exception e, HttpServletRequest request){
        LOG.error("msg:{},url:{}", ((LimitException)e).getMsg(), request.getRequestURL());
        Map<String, Object> map = new HashMap<>();
        map.put("code",((LimitException) e).getCode());
        map.put("msg",((LimitException) e).getMsg());
        map.put("url", request.getRequestURL());
        return map;
    }
}