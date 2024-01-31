create table users(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    username varchar(30) NOT NULL,
    password_hash binary(64) NOT NULL,
    email varchar(255) NOT NULL,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
    updated_by bigint,
    updated_at datetime
)
create table customers(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    customer_name varchar(255) NOT NULL,
    nik varchar(16) NOT NULL,
    address varchar(255) NOT NULL,
    phone varchar(13) NOT NULL,
    email varchar(255) NOT NULL,
    job varchar(255) NOT NULL,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
    updated_by bigint,
    updated_at datetime
);
create table branches(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    branch_name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    phone varchar(13) NOT NULL,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
    updated_by bigint,
    updated_at datetime
);
create table products(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    product_name varchar(255) NOT NULL,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
    updated_by bigint,
    updated_at datetime
);
create table accounts(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    customer_id bigint FOREIGN KEY REFERENCES customers(id),
    branch_id bigint FOREIGN KEY REFERENCES branches(id),
    product_id bigint FOREIGN KEY REFERENCES products(id),
    account_number varchar(255) NOT NULL,
    balance bigint DEFAULT 0,
    open_date datetime NOT NULL,
    close_date datetime,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
    updated_by bigint,
    updated_at datetime
);
create table mutations(
    id bigint IDENTITY(1,1) PRIMARY KEY,
    account_id bigint FOREIGN KEY REFERENCES accounts(id),
    transaction_type varchar(255) NOT NULL,
    amount bigint DEFAULT 0,
    recepient_account varchar(30) NOT NULL,
    mutation_date datetime NOT NULL,
    platform varchar(255) NOT NULL,
    created_by bigint NOT NULL,
    created_at datetime NOT NULL,
);
insert into users(username, password_hash, email, created_by, created_at)
values('teller1', 010001111, 'teller1@bri.co.id', 1, GETDATE());
insert into customers(customer_name, nik, address, phone, email, job, created_by, created_at)
values('Rosa', '12345', 'Jakpus', '0000123', 'rosa@gmail.com', 'karyawan', 1, GETDATE());
insert into branches(branch_name, address, phone, created_by, created_at)
values('Kemang', 'Kemang Raya', '678999', 1, GETDATE());
insert into products(product_name, created_by, created_at)
values('Britama', 1, GETDATE());
insert into accounts(customer_id, branch_id, product_id, account_number, balance, open_date, created_by, created_at)
values(1, 1, 1, '123456789', 1000000, GETDATE(), 1, GETDATE());
insert into mutations(account_id, transaction_type, amount, recepient_account, mutation_date, platform, created_by, created_at)
values(1, 'setoran awal', 1500000, '123456789', GETDATE(), 'Brimo', 1, GETDATE()),
        (1, 'tarik tunai', 500000, '-', GETDATE(), 'cardless atm', 1, GETDATE());
select * from users;
select * from customers;
select * from branches;
select * from products;
select * from accounts;
select * from mutations;