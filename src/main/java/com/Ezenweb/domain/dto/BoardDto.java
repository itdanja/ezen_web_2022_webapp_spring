package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.BoardEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@NoArgsConstructor @AllArgsConstructor@Getter @Setter @ToString @Builder
public class BoardDto {
    private int bno;            // 게시물번호
    private String btitle;      // 게시물제목
    private String bcontent;    // 게시물 내용
    private int bview;          // 조회수
    private String bfile;       // 첨부파일
    private int mno;            // 작성자[회원번호-fk]
    private int cno;            // 카테고리[ 카테고리-fk ]

    //1. 형변환
    public BoardEntity toEntity(){
        // * 생성자를 이용한 객체 생성 [ *빌더패턴 비교 ]
        return new BoardEntity( this.bno,this.btitle,
                this.bcontent,this.bview,this.bfile,
                this.mno,this.cno);
    }
}














