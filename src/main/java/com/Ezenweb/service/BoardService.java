package com.Ezenweb.service;

import com.Ezenweb.domain.dao.BoardDao;
import com.Ezenweb.domain.dto.BoardDto;
import com.Ezenweb.domain.entity.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    // ------------1.전역변수---------------//
    @Autowired
    private BoardRepository boardRepository;

    // ------------ 2. 서비스 ------------- //
    public boolean setboard( BoardDto boardDto ){ }
    public List<BoardDto> boardlist(){ }
    public BoardDto getboard( int bno ){ }
    public boolean delboard( int bno ){ }
    public boolean upboard( BoardDto boardDto){ }

}












