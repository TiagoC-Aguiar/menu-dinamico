package br.com.exemplo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

//@EntityScan(basePackages = {"domain"})
@SpringBootApplication
public class MenuDinamicoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MenuDinamicoApplication.class, args);
	}

}
