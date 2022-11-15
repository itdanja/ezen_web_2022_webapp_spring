package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.MemberDto;
import com.Ezenweb.domain.entity.MemberEntity;
import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController // Restful api 사용하는 controller 명시
@RequestMapping("/member") // 공통 URL 매핑 주소
public class MemberController {

// --------------------------------- 전역 객체  ---------------------------------- //
    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성

// --------------------------------- HTML 반환 매핑 ---------------------------------- //
    @GetMapping("/signup")
    public Resource getsignup(){
        return new ClassPathResource("templates/member/signup.html"); // 프로젝트내 resource -> templates -> member -> signup.html 반환
    }
    @GetMapping("/login")
    public Resource getlogin(){
        return new ClassPathResource("templates/member/login.html");
    }

// --------------------------------- 서비스/기능 매핑 ------------------------------------- //
    @PostMapping("/setmember") // 회원가입 기능
    public int setmember( @RequestBody MemberDto memberDto  ){
        int result = memberService.setmember( memberDto ); // 1. 서비스[ 비지니스 로직 ] 호출
        return result;  // 2. 반환
    }
    @PostMapping("/getmember") // 로그인 기능
    public int getmember( @RequestBody MemberDto memberDto ){
        int result = memberService.getmember( memberDto );
        return result;
    }

}











