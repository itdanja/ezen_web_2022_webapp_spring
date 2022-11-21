package com.Ezenweb.domain.test;

public class 싱글톤 {
    // 1. 생성자 잠그기
    private 싱글톤(){}
    // 2. 상수 = static final  객체 생성
    private static final 싱글톤 object = new 싱글톤();
    // 3. 외부로 부터 싱글톤 내보내기
    public static 싱글톤 getInstance(){
        return object;
    }
}
