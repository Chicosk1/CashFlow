package com.cashflow.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cashflow.api.model.Categoria;
import com.cashflow.api.repository.CategoriaRepository;

@Service
public class CategoriaService {

    private final CategoriaRepository repository;

    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public List<Categoria> listarTodas() {
        return repository.findAll();
    }

    public Categoria salvar(Categoria categoria) {
        return repository.save(categoria);
    }
}