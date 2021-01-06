package com.felipescherer.fsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.felipescherer.fsdeliver.dto.OrderDTO;
import com.felipescherer.fsdeliver.entities.Order;
import com.felipescherer.fsdeliver.repositories.OrderRepository;

@Service //Precisamos falar para o spring que essa classe é um serviço, pode ser feito com @Component tbm
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
