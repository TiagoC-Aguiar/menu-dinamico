package br.com.exemplo.endpoint;

import br.com.exemplo.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("menus")
public class MenuEndpoint {
    private MenuRepository dao;

    @Autowired
    public MenuEndpoint(MenuRepository dao) {
        this.dao = dao;
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<?> listMenus() {
        return new ResponseEntity<>(dao.findAll(), HttpStatus.OK);
    }
}
