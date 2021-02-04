create database fseletro;

use fseletro;
create table produto(
idproduto int auto_increment primary key,
categoria varchar (255),
descricao varchar (255),
imagem varchar (255),
precoinicial float,
precofinal float 
);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values ('geladeira' , 'Geladeira frost free brastemp side invese 540 litros' , 'imagens/frost3.jpeg' ,6385.00 ,	5019.00);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('geladeira' ,	'Geladeira frost free brastemp Branca 375 litros' ,	'imagens/frost2.jpeg',	2068.60 , 1910.90);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('geladeira' ,	'Geladeira frost free brastemp Consul parta 340 litros' , 'imagens/frost1.jpeg', 2109.90 , 2069.00);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('fogao' ,'Fogão 4 Bocas Consul Inox com Mesa de Vidro' ,	'imagens/fogao11.jpeg' ,	1299.00 , 1129.00);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('fogao' ,	'Fogão 4 Bocas Altas Monaco com Acendiemnto Automantico' ,'imagens/Fogao10.jpeg',	699.00 , 519.70);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('microondas' ,	'Microondas Consul 32 lITROS Inox 220V' , 'imagens/micro1.jpeg', 680.00	, 409.88);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('microondas' ,	'Microonadas 25L Espelhado Philco 220V' , 'imagens/micro2.jpeg' ,	508.70 , 464.53);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('microondas' ,	'Forno de Microondas Eletrolux 20L Branco',	'imagens/micro3.jpeg' ,	450.99 , 436.05);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('lavadouraderoupa' , 'Lavadoura de Roupas Brastemp 21KG com Turbo Peformance Branca' ,	'imagens/lavaroupa1.jpeg' ,	1660.99 , 1214.20);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('lavadouraderoupa' , 'Lavadoura de Roupa Philco Inverter 12KG' , 'imagens/lavaroupa.jpeg' , 6385.00 , 5019.00);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('lavaloucas' ,	'Lava Louças Eletrolux Inox com 10 Serviços de programa de Lavagem e Painel Blue Touch' , 'imagens/lava1.jpeg' , 3599.00 , 2799.90);

insert into produto (categoria, descricao, imagem, precoinicial, precofinal)
values('lavaloucas' ,	'Lava louças Compacta 8 Serviços Branca 127V Brastemp' , 'imagens/lava2.jpeg' ,	1970.50	, 1730.61);



create table usuarios(
idusuarios int auto_increment primary key,
nome varchar( 100),not null,
mensagem varchar (100) not null,
data datetime default now()
);

insert into usuarios(nome,mensagem)
values('romildo','ta dificil');



create table pedidos(
idpedido int auto_increment primary key,
nomeCliente varchar( 100),
endereco varchar( 150),
telefone varchar(14),
nomeProduto varchar(45),
valorUnitario float,
quantidade int,
valorTotal float
);


insert into pedidos(nomeCliente , endereco , telefone , nomeProduto , valorUnitario , quantidade , valorTotal)
values ('romildo modesto','rua B','11-9987-9876','GELADEIRA FOSTFREE 500',2.700,00, 2, 2800.00);

insert into pedidos(nomeCliente , endereco , telefone , nomeProduto , valorUnitario , quantidade , valorTotal)
values ('romildo modesto','rua B','11-9987-9876','GELADEIRA FOSTFREE 500',2.700,00, 2, 2800.00);