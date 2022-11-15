package com.Ezenweb.service;

import com.Ezenweb.domain.dto.MemberDto;
import com.Ezenweb.domain.entity.MemberEntity;
import com.Ezenweb.domain.entity.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service // 해당 클래스가 Service 명시 // 1. 비지니스 로직 [ 알고리즘 - 기능 ]
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    // 1. 회원가입
    public int setmember(MemberDto memberDto ){
        // 1. DAO 처리 [ insert ]
        MemberEntity entity = memberRepository.save( memberDto.toEntity() );
            // memberRepository.save( 엔티티 객체 ) : 해당 엔티티 객체가 insert 생성된 엔티티객체 반환
         // 2. 결과 반환 [ 생성된 엔티티의 pk값 반환 ]
        return entity.getMno();
    }
    // 2. 로그인
    public int getmember(MemberDto memberDto ){
        // 1. Dao 처리 [ select ]
            // 1. 모든 엔티티=레코드 호출 [ select * from member ]
        List<MemberEntity> entityList = memberRepository.findAll();
            // 2. 입력받은 데이터와 일치값 찾기
        for( MemberEntity entity : entityList ){ // 리스트 반복
            if( entity.getMemail().equals(memberDto.getMemail())){ // 엔티티=레코드 의 이메일 과 입력받은 이메일
                if( entity.getMpassword().equals(memberDto.getMpassword())){ // 엔티티=레코드 의 패스워드 와 입력받은 패스워드
                    return 1;// 로그인 성공했다.
                }else{
                    return 2; // 패스워드 틀림
                }
            }
        }
        return 0; // 아이디가 틀림
    }
    // 3. 비밀번호찾기
    public String getpassword( String memail ){
        // 1. 모든 레코드/엔티티 꺼내온다.
        List<MemberEntity> entityList
                = memberRepository.findAll();
        // 2. 리스트에 찾기
        for( MemberEntity entity : entityList ){ // 리스트 반복
            if( entity.getMemail().equals( memail) ){
                return entity.getMpassword();
            }
        }
        return null;
    }
}









