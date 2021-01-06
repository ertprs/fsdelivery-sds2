package com.felipescherer.fsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.felipescherer.fsdeliver.entities.Order;

//Camada de acesso a dados

public interface OrderRepository extends JpaRepository<Order, Long>{

}
