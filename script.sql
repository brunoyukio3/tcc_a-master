drop database if exists db_autonomo;
create database db_autonomo;
use db_autonomo;

CREATE TABLE autonomo (
    id_autonomo		 	INT PRIMARY KEY auto_increment,
    nome 				VARCHAR(255) not null,
    senha 				VARCHAR(255) not null
);

INSERT INTO autonomo (nome, senha)
VALUES ('usuario', '1234');

select * from autonomo;

CREATE TABLE produtos (
    id_produto			INT PRIMARY KEY auto_increment,
    nome 				VARCHAR(255),
    categoria			VARCHAR(255),
    img 				longtext,
    descricao 			VARCHAR(255),
    valor 				DECIMAL(18,2),
    disponivel			BOOLEAN,
    estoque				INT,
    id_autonomo			INT,
    FOREIGN KEY (id_autonomo) references autonomo (id_autonomo)
);

INSERT INTO produtos (nome, categoria, img, descricao, valor, disponivel, estoque, id_autonomo)
VALUES
    ('Batom Matte', 'Maquiagem', 'img/batom_matte.jpg', 'Batom com acabamento matte e longa duração', 29.90, TRUE, 50, 1),
    ('Base Líquida', 'Maquiagem', 'img/base_liquida.jpg', 'Base líquida com cobertura média', 49.90, TRUE, 30, 1),
    ('Sérum Facial', 'Cuidados com a Pele', 'img/serum_facial.jpg', 'Sérum antioxidante para uso diário', 89.90, TRUE, 20, 1),
    ('Hidratante Corporal', 'Cuidados com a Pele', 'img/hidratante_corporal.jpg', 'Hidratante de rápida absorção', 39.90, TRUE, 40, 1),
    ('Shampoo Nutritivo', 'Cabelos', 'img/shampoo_nutritivo.jpg', 'Shampoo que nutre e fortalece os fios', 24.90, TRUE, 100, 1),
    ('Condicionador Nutritivo', 'Cabelos', 'img/condicionador_nutritivo.jpg', 'Condicionador hidratante e nutritivo', 24.90, TRUE, 100, 1),
    ('Creme para Mãos', 'Cuidados com a Pele', 'img/creme_maos.jpg', 'Creme hidratante para as mãos', 19.90, TRUE, 60, 1),
    ('Perfume Floral', 'Perfumes', 'img/perfume_floral.jpg', 'Perfume com fragrância floral e suave', 129.90, TRUE, 15, 1),
    ('Esfoliante Corporal', 'Cuidados com a Pele', 'img/esfoliante_corporal.jpg', 'Esfoliante para remoção de células mortas', 34.90, TRUE, 25, 1),
    ('Óleo Capilar', 'Cabelos', 'img/oleo_capilar.jpg', 'Óleo reparador para pontas duplas', 59.90, TRUE, 35, 1);
select * from produtos;	