package com.Ezenweb.domain.dto;

import lombok.*;

// 롬복 : 생성자,GET/SET,TOString,빌더패턴
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class BoardDto {
    private String btitle;
    private String bcontent;
}



