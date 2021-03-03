-- EMPLOYEE
INSERT INTO EMPLOYEE (name, address, phone_number, cell_number, role)
VALUES ('Luis', 'Rua José Avelino 775', '3333-3333', '99999-9999', 'Desenvolvedor');

INSERT INTO EMPLOYEE (name, address, phone_number, cell_number, role)
VALUES ('Robert', 'Rua B', '3333-3333', '99999-9999', 'Assitente');

INSERT INTO EMPLOYEE (name, address, phone_number, cell_number, role)
VALUES ('José', 'Rua J', '3333-3333', '99999-9999', 'Administrador');

-- COMPANY
INSERT INTO COMPANY (name, address, phone_number, employee_id)
VALUES ('Vigor', 'Rua Desembargador 11', '3333-3333', 3);

INSERT INTO COMPANY (name, address, phone_number, employee_id)
VALUES ('Cougar', 'Rua X', '3213-3333', 3);

INSERT INTO COMPANY (name, address, phone_number, employee_id)
VALUES ('MV', 'Aldeota', '4444-4444', 2);