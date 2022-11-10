package com.Ezenweb.domain.dto;


import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class MemberDto {

    private String name;
    private String email;
    private String organization;

}
