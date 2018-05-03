package com.xeye;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class DBConfig {
	
    @Bean(name = "mydb")
    @ConfigurationProperties(prefix = "spring.datasource.my")
    public DataSource mysqlDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "mydbJdbcTemplate")
    public JdbcTemplate jdbcTemplate(@Qualifier("mydb") DataSource dsmy) {
        return new JdbcTemplate(dsmy);
    }
}
