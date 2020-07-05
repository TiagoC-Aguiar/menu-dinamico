package br.com.exemplo.repository;

import br.com.exemplo.model.MenuEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MenuRepository extends CrudRepository<MenuEntity, Integer> {
//    List<MenuEntity> findByTitulo(String titulo);
    List<MenuEntity> findByStatus(boolean status);
}
