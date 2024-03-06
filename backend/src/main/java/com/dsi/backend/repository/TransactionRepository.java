package com.dsi.backend.repository;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,String> {
    @Query(value = "SELECT t FROM Transaction t WHERE t.tran_id=?1")
    Transaction findByTran_id(String tran_id);

}
