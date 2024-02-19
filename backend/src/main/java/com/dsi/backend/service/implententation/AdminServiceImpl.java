package com.dsi.backend.service.implententation;

import com.dsi.backend.model.Product;
import com.dsi.backend.model.TokenResponse;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.AdminService;
import com.dsi.backend.service.JwtTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AdminServiceImpl implements AdminService {

}
