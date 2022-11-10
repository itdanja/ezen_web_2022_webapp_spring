package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

// *. P.67
@RestController // 스프링이 해당 클래스를 RestController 임을 빈에 등록
@RequestMapping("/api/v1/post-api") // 공통URL // 클래스로 들어오는 주소
public class PostController {

    // 1. P.68      @RequestMapping
    @RequestMapping(value = "/domain" , method = RequestMethod.POST)
    public String postExample(){  return "Hello Post API";  }

    // 2. P.69      @PostMapping    @RequestBody
    @PostMapping("/member")
    public String postMember( @RequestBody Map<String , String > postData ){
        return postData.toString();
    }

    // 3. p.69      @RequestBody
    @PostMapping("/member2")
    public String postMemberDto( @RequestBody MemberDto memberDto ){
        return memberDto.toString();
    }



}
