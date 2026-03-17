package com.cashflow.api.config;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.cashflow.api.model.Categoria;
import com.cashflow.api.model.TipoCategoria;
import com.cashflow.api.repository.CategoriaRepository;

@Configuration
public class BancoSeeder implements CommandLineRunner {

    private final CategoriaRepository categoriaRepository;

    public BancoSeeder(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public void run(String... args) {
        if (categoriaRepository.count() == 0) {
            Categoria c1 = new Categoria();
            c1.setNome("Salário");
            c1.setTipo(TipoCategoria.RECEITA);

            Categoria c2 = new Categoria();
            c2.setNome("Moradia");
            c2.setTipo(TipoCategoria.DESPESA);

            Categoria c3 = new Categoria();
            c3.setNome("Alimentação");
            c3.setTipo(TipoCategoria.DESPESA);

            categoriaRepository.saveAll(Arrays.asList(c1, c2, c3));
            System.out.println("Banco de dados semeado com categorias iniciais!");
        }
    }
}