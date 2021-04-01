package com.example.demo.service;

import java.lang.annotation.*;

@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Inherited
public @interface Limiter {
    double LimitNum() default  10;      //默认每秒产生10个令牌
}