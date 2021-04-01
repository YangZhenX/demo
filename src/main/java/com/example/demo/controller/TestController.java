package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.Limiter;

@RestController
public class TestController {
    @RequestMapping(value = "/test1")
    @Limiter(LimitNum = 20)
    public String Curry(){
        System.out.println("接口1请求成功");
        return "";
    }

    @RequestMapping(value = "/test2")
    @Limiter(LimitNum = 2)
    public String Harden(){
        System.out.println("接口2请求成功！！");
        return "";
    }
}
