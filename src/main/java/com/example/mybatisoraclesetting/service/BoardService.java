package com.example.mybatisoraclesetting.service;

import com.example.mybatisoraclesetting.modelVo.BoardVo;
import com.example.mybatisoraclesetting.modelVo.PcDataVo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


public interface BoardService {
    public List<BoardVo> boardListAll(BoardVo boardVo)throws Exception ;
    public List<PcDataVo> pcDataList(PcDataVo pcDataVo)throws Exception; //리스트 보여줄거
    public int create(PcDataVo param) throws Exception;             //글쓰기
    public int submitinsert(PcDataVo pcDataVo) throws Exception;    //글쓰기
    public void deleteData(PcDataVo pcDataVo)throws Exception;      //삭제
}
