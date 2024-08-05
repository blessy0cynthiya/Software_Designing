
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepo;



@Service
public class LoginService {
    @Autowired
    LoginRepo mr;
    public Login create (Login mm)
    {
        return mr.save(mm);
    }
    public List<Login> getAll()
    {
        return mr.findAll();
    }
    public Login getMe(int id)
    {
        return mr.findById(id).orElse(null);
    }
    public boolean updateDetails(int id,Login mm)
        {
            if(this.getMe(id)==null)
            {
                return false;
            }
            try{
                mr.save(mm);
            }
            catch(Exception e)
            {
                return false;
            }
            return true;
        }
public boolean deleteLogin(int id)
        {
            if(this.getMe(id) == null)
            {
                return false;
            }
            mr.deleteById(id);
            return true;
        }
        public List<Login> sort(String field)
    {
        Sort sort=Sort.by(Sort.Direction.ASC,field);
        return mr.findAll(sort);
    }
    public List<Login> page(int pageSize,int pageNumber)
    {
        Pageable page=PageRequest.of(pageNumber, pageSize);
        return mr.findAll(page).getContent();
    }

    //sorting and pagination
    public List<Login> getsort(int pageNumber,int pageSize,String field)
    {          return mr.findAll(PageRequest.of(pageNumber, pageSize).withSort(Sort.by(Sort.Direction.ASC,field))).getContent();
    }

}
