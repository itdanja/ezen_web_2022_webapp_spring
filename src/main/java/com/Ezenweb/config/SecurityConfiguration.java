package com.Ezenweb.config;


import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration // 설정 컴포넌트 주입
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private MemberService memberService;

    @Override // 인증(로그인) 관련 메소드 재정의
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService( memberService ).passwordEncoder( new BCryptPasswordEncoder() );
        // memberService 에서  UserDetailsService 구현체
            // loadUserByUsername 구현
    }

    @Override // http 관련 시리큐티 재정의
    protected void configure( HttpSecurity http) throws Exception {
        http
                // 권한[role] 에 따른 http 접근 제한 두기
                .authorizeHttpRequests() // 1. 인증 http 요청들 [ 인증-로그인된 ] http 조건들
                    .antMatchers("/board/write")
                        .hasRole("MEMBER") // 게시물쓰기는 회원[MEMBER]만 가능
                    .antMatchers("/room/write")
                        .hasRole("MEMBER") // 게시물쓰기는 회원[MEMBER]만 가능
                    .antMatchers("/board/update/**")
                        .hasRole("MEMBER")
                    .antMatchers("/admin/**")
                        .hasRole("ADMIN") // admin 시작하는 경로들은 ADMIN 권한 접근 가능
                    .antMatchers("/**")
                        .permitAll() // 접근 제한 없음 [ 모든 유저가 사용가능 ]
                .and()
                    .formLogin()                                        // 로그인 페이지 보안 설정
                        .loginPage("/member/login")                     // 아이디와 비밀번호를 입력받을 URL [ 로그인 페이지  ]
                        .loginProcessingUrl("/member/getmember")        // 로그인을 처리할 URL [ 서비스 --> loadUserByUsername  ]
                        .defaultSuccessUrl("/")                         // 로그인 성공했을때 이동할 URL
                        .failureUrl("/member/login") // 로그인 실패시 이동할 URL
                        .usernameParameter("memail")                    // 아이디 변수명
                        .passwordParameter("mpassword")                 // 비밀번호 변수명
                .and()// 기능 구분
                    .logout()                                           // 로그아웃 보안 설정
                        .logoutRequestMatcher( new AntPathRequestMatcher("/member/logout")) // 로그아웃 처리 URL 정의
                        .logoutSuccessUrl("/")                          // 로그아웃 성공했을때 이동할 URL
                        .invalidateHttpSession( true )                  // 세션초기화  [ principal 초기화 ]
                .and()  // 기능 구분
                    .csrf() // 요청 위조 방지
                        .ignoringAntMatchers("/member/getmember") // 로그인 post 사용  // 해당 URL 요청 방지 해지
                        .ignoringAntMatchers("/member/setmember") // 회원가입 post 사용
                        .ignoringAntMatchers("/board/setbcategory") // 카테고리 post 사용
                        .ignoringAntMatchers("/board/setboard") // 게시물입력 post 사용
                        .ignoringAntMatchers("/board/boardlist") // 게시물출력 post 사용
                        .ignoringAntMatchers("/board/delboard") // 게시물삭제 delete 사용
                        .ignoringAntMatchers("/board/upboard") // 게시물수정 put 사용
                        .ignoringAntMatchers("/room/setroom") // 게시물수정 put 사용
                .and()
                    .oauth2Login() // 소셜 로그인 보안 설정
                    .defaultSuccessUrl("/")// 소셜 로그인 성공시 이동하는 URL
                    .userInfoEndpoint()// Endpoint (종착점) : 소셜 회원정보를 들어오는곳
                    .userService( memberService );// 해당 서비스  loadUser 메소드 구현
    }
}

/*

    시큐리티 사용방법
        // 1. 그레이들 의존성 추가
            1. implementation 'org.springframework.boot:spring-boot-starter-security'

        // 2. 시큐리티 커스텀[ 기본 설정값 변경 ]
            @Configuration : 컴포넌트 시리즈 [ @Controller , @Service , @Entity , @Configuration 등 ]
            1. WebSecurityConfigurerAdapter 클래스 상속 받아서 커스텀 클래스 선언
                1. configure(HttpSecurity http) : http 보안 메소드
                2.

    시큐리티 기본값
            1. 해당 프로젝트의 모든  http URL 잠긴다.
                -> 커스텀 : http 권한 없애기
                        @Override // 재정의 [ 상속받은 클래스로부터 메소드 재구현  ]
                        protected void configure(HttpSecurity http) throws Exception {

                        }
            2. login html 제공
            3. login controller 제공
            4. login service 제공
            -----------> 커스텀 작업 -> SecurityConfiguration : 시큐리티 설정 클래스
                // WebSecurityConfigurerAdapter : 웹시큐리티 설정 클래스
                     // 설정 종류
                        // 1. URL 권한

    권한에 따른 http 제한두기

        http
            .authorizeRequests()        // 인증요청URL들
                .antMatchers("URL").hasRole("권한이름")         // 1. 해당 URL 에 해당 권한명을 가진 인증만 접근 가능
                .antMatchers("URL").authentication()            // 2. 인증된 모든 사용자 접근 가능
                .antMatchers("URL").permitAll()                 // 3. 인증 상관없이 무조건 허용
                .antMatchers("URL").denyAll()                   // 4. 인증 상관없이 무조건 차단
                .antMatchers("URL").hasIpAddress("ip주소")       // 5. 해당 ip만 접근 가능

 */