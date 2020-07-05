package br.com.exemplo.endpoint;

import br.com.exemplo.error.ResourceNotFoundException;
import br.com.exemplo.model.MenuEntity;
import br.com.exemplo.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("menus")
public class MenuEndpoint {
    private MenuRepository dao;

    @Autowired
    public MenuEndpoint(MenuRepository dao) {
        this.dao = dao;
    }

    @GetMapping
    public ResponseEntity<?> listMenus(@RequestParam(required = false) boolean listAll) {
        if(listAll)
            return new ResponseEntity<>(dao.findAll(), HttpStatus.OK);
        return new ResponseEntity<>(dao.findByStatus(true), HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findMenuById(@PathVariable Integer id) {
        menuExists(id);
        MenuEntity menu = dao.findById(id).get();
        return new ResponseEntity<>(menu, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody MenuEntity menu) {
        return new ResponseEntity<>(dao.save(menu), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody MenuEntity menu) {
        menuExists(menu.getId());
        return new ResponseEntity<>(dao.save(menu), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        menuExists(id);
        dao.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private void menuExists(Integer id) {
        try {
            dao.findById(id).get();
        } catch (Exception e) {
            throw new ResourceNotFoundException("Menu não contrado com id: " + id);
        }

    }
}
