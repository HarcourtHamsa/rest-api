CREATE TABLE users
(
    id bigint NOT NULL ,
    firstname text  NOT NULL,
    lastname text NOT NULL,
    password charvar(20)  NOT NULL,
    emailaddress charvar(100)  NOT NULL,
    role text NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

INSERT INTO users(firstname, lastname, password, emailaddress, role ) VALUES (
    'Hamsa', 'Harcourt', 'eckankar2757101', 'hamsaharcourt@gmail.com', 'admin'
);

INSERT INTO users(firstname, lastname, password, emailaddress, role ) VALUES (
    'Ebube', 'Esiobu', 'ebubeesiobu', 'ebubeesiobu@gmail.com', 'admin'
);